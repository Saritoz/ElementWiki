import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../Title/title";
import { useSelector } from "react-redux";
import Container from "../../Container/container";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const elements = useSelector(
    (state) => state.elementStore.elements?.basicElements
  );

  const status = useSelector(
    (state) => state.statusStore.statuses?.basicStatus
  );

  useEffect(() => {
    const changeIndex = setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % elements?.length);
    }, 5000);
    return () => clearTimeout(changeIndex);
  }, [currentIndex, elements?.length]);

  useEffect(() => {
    const changeStatus = setTimeout(() => {
      setCurrentStatusIndex(
        (currentStatus) => (currentStatus + 1) % status?.length
      );
    }, 5000);
    return () => clearTimeout(changeStatus);
  }, [currentStatusIndex, status?.length]);

  return (
    <>
      <Container>
        <Title name="Elements"></Title>
        {elements && (
          <section>
            <div className="mx-auto mb-3 flex w-[80%] flex-wrap items-center justify-between gap-y-4 lg:flex-nowrap">
              {elements.map((element, index) => (
                <div
                  className={`basis-1/2 border-x-[1px] border-b-[1px] border-transparent px-5 text-center text-xl capitalize transition-colors duration-500 hover:cursor-pointer md:basis-1/4 lg:basis-auto lg:px-8 ${
                    index === currentIndex ? "home-elements-active" : ""
                  }`}
                  style={{ "--ct-color-elements": element.color }}
                  key={element.name}
                  onClick={() => setCurrentIndex(index)}
                >
                  {element.name}
                </div>
              ))}
            </div>
            <div className="mx-auto flex h-auto w-full flex-wrap items-center justify-center overflow-hidden rounded-xl sm:h-[500px] lg:w-[80%] lg:flex-nowrap">
              <div className="relative flex h-[400px] basis-full items-center justify-center before:absolute before:h-[210px] before:w-[210px] before:animate-rotate-infinite before:border-[1px] before:border-gray-600 before:content-[''] after:absolute after:h-[230px] after:w-[230px] after:animate-rotate-infinite-reverse after:border-[1px] after:border-gray-600 after:content-[''] sm:h-auto sm:basis-1/2  md:before:h-[260px] md:before:w-[260px] md:after:h-[280px] md:after:w-[280px]">
                <img
                  src={`./imgs/elements/${elements[currentIndex].name}.webp`}
                  alt=""
                  className="w-[150px] md:w-[200px]"
                />
              </div>
              <div className="flex basis-full flex-col justify-center px-12 sm:h-full sm:basis-1/2">
                <div
                  className={`text-[32px] capitalize transition-colors duration-500`}
                >
                  {elements[currentIndex].name}
                </div>
                <div className="text-lg">{elements[currentIndex]?.about}</div>
                <Link
                  to={`/element/${elements[currentIndex].name}`}
                  className="mt-4 w-[150px] rounded-xl bg-blue-2 py-3 text-center text-lg text-blue-1 transition-all duration-500 hover:bg-blue-5 hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>
        )}
        <Title name="Status Effects"></Title>
        {status && (
          <section>
            <div className="mx-auto mb-3 flex w-full flex-wrap items-center justify-between gap-y-4 xl:flex-nowrap">
              {status.map((s, index) => (
                <div
                  className={`group flex basis-1/2 justify-center px-5 text-center text-xl capitalize hover:cursor-pointer md:basis-1/4 lg:basis-1/5 lg:px-8 xl:basis-auto`}
                  key={s.name}
                  onClick={() => setCurrentStatusIndex(index)}
                >
                  <p
                    className={`border-b-[1px] border-b-transparent text-center transition-colors duration-500 group-hover:text-stone-400 ${
                      index === currentStatusIndex ? "home-status-active" : ""
                    }`}
                  >
                    {s.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="mx-auto flex h-auto w-full flex-wrap items-center justify-center overflow-hidden rounded-xl sm:h-[350px] sm:flex-row-reverse lg:w-[80%] lg:flex-nowrap">
              <div className="flex h-[220px] basis-full items-center justify-center sm:basis-1/2">
                <div className="relative flex h-[180px] w-[180px] items-center justify-center overflow-hidden before:absolute before:z-[1] before:h-[350px] before:w-[70px] before:rotate-45 before:animate-status-border-anim before:bg-blue-3 before:content-[''] after:absolute after:inset-[1px] after:z-[2] after:bg-white after:content-[''] sm:h-[230px] sm:w-[230px]">
                  <img
                    src={`./imgs/statusEffects/${status[currentStatusIndex].name}.webp`}
                    alt=""
                    className="z-[3] w-[150px] md:w-[200px]"
                  />
                </div>
              </div>
              <div className="flex basis-full flex-col justify-center px-12 sm:h-full sm:basis-1/2">
                <div
                  className={`text-[32px] capitalize transition-colors duration-500`}
                >
                  {status[currentStatusIndex].name}
                </div>
                <div className="text-lg">
                  {status[currentStatusIndex].about}
                </div>
                <Link
                  to={`/status/${status[currentStatusIndex].name}`}
                  className="mt-4 w-[150px] rounded-xl bg-blue-2 py-3 text-center text-lg text-blue-1 transition-all duration-500 hover:bg-blue-5 hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>
        )}
      </Container>
    </>
  );
};

export default HomePage;
