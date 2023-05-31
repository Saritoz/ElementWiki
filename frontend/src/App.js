import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import ElementPage from "./components/pages/Element/elementpage";
import HomePage from "./components/pages/Home/homepage";
import { getBasicElements, getBasicStatuses } from "./redux/apiRequest";
import Loading from "./components/Loading/loading";
import StatusPage from "./components/pages/Status/status";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";

function App() {
  const dispatch = useDispatch();
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const isFetchingElement = useSelector(
    (state) => state.elementStore.elements?.isFetching
  );
  const isFetchingStatus = useSelector(
    (state) => state.statusStore.statuses?.isFetching
  );

  useEffect(() => {
    getBasicElements(dispatch);
    getBasicStatuses(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const body = document.body;
    if (isMenuMobile || isFetchingElement || isFetchingStatus)
      body.classList.add("overflow-hidden");
    else body.classList.remove("overflow-hidden");

    return () => body.classList.remove("overflow-hidden");
  }, [isMenuMobile, isFetchingElement, isFetchingStatus, dispatch]);

  return (
    <>
      <Router>
        {(isFetchingElement || isFetchingStatus) && <Loading />}
        <ScrollToTop />
        <Header isMenuMobile={isMenuMobile} setIsMenuMobile={setIsMenuMobile} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/element/:name" element={<ElementPage />} />
          <Route path="/status/:name" element={<StatusPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
