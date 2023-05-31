import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchbar";
import SearchBarMobile from "../SearchBar/searchbarmobile";

const Header = (props) => {
  const { isMenuMobile, setIsMenuMobile } = props;
  const [isElementClick, setIsElementClick] = useState(false);
  const [isStatusClick, setIsStatusClick] = useState(false);
  const elements = useSelector(
    (state) => state.elementStore.elements?.basicElements
  )?.map((e) => e.name);

  const status = useSelector(
    (state) => state.statusStore.statuses?.basicStatus
  )?.map((s) => s.name);

  return (
    <>
      <div className="fixed top-0 z-10 flex h-[80px] w-full flex-row items-center justify-between bg-blue-1 px-4">
        <div className="text-[24px] font-bold">
          <span className="text-red-500">E</span>
          <span className="text-indigo-500">l</span>
          <span className="text-yellow-500">e</span>
          <span className="text-blue-500">m</span>
          <span className="text-green-500">e</span>
          <span className="text-amber-500">n</span>
          <span className="text-neutral-500">t</span>
          <span className="text-white">Wiki</span>
        </div>
        <div className="hidden flex-row text-lg md:flex md:items-center md:justify-around">
          <div className="ct-header_hover relative mx-10 text-white hover:cursor-pointer">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="ct-header_hover group relative mx-10 text-white hover:cursor-pointer">
            <div
              onClick={() => {
                setIsElementClick(!isElementClick);
                setIsStatusClick(false);
              }}
            >
              Element<i className="fa-solid fa-chevron-down ml-2 text-sm"></i>
            </div>
            {!isMenuMobile && isElementClick && (
              <div className="absolute top-[150%] left-0 min-w-[180px] animate-trans-down bg-blue-1">
                {elements?.map((item) => (
                  <Link
                    to={`/element/${item}`}
                    className={`block px-2 py-3 bg-${item} capitalize`}
                    key={item}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="ct-header_hover relative mx-10 text-white hover:cursor-pointer">
            <div
              onClick={() => {
                setIsStatusClick(!isStatusClick);
                setIsElementClick(false);
              }}
            >
              Status Effect
              <i className="fa-solid fa-chevron-down ml-2 text-sm"></i>
            </div>
            {!isMenuMobile && isStatusClick && (
              <div className="absolute top-[150%] left-0 min-w-[180px] animate-trans-down bg-blue-1">
                {status?.map((item) => (
                  <Link
                    to={`/status/${item}`}
                    className={`block px-2 py-3 capitalize transition-colors duration-500 hover:bg-gradient-to-tl hover:from-slate-200 hover:to-stone-500`}
                    key={item}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <SearchBar elements={elements} statuses={status} />
          <i
            className="fa-solid fa-ellipsis-vertical mx-1 inline-block p-3 text-lg text-white hover:cursor-pointer md:hidden"
            onClick={() => setIsMenuMobile(!isMenuMobile)}
          ></i>
        </div>
      </div>
      {isMenuMobile && (
        <>
          <div
            className="fixed top-0 left-0 z-[15] h-screen w-full bg-slate-200 bg-opacity-50"
            onClick={() => {
              setIsMenuMobile(false);
              setIsElementClick(false);
              setIsStatusClick(false);
            }}
          ></div>
          <div
            className={`fixed right-0 top-0 z-20 m-0 h-full w-[220px] overflow-y-auto bg-blue-1 bg-opacity-90 pt-4 text-lg`}
          >
            <div className="mt-4 border-white pl-1 text-white">Search</div>
            <SearchBarMobile elements={elements} statuses={status} />
            <div className="mt-4 border-white pl-1 text-white">Menu</div>
            <Link
              to={"/"}
              className="mb-1 ml-3 block border-l-[0.5px] border-gray-300 px-3 text-gray-300 transition-all duration-300 hover:cursor-pointer hover:border-white hover:bg-gray-500 hover:text-white"
            >
              Home
            </Link>
            <div className="border-gray-300 text-gray-300">
              <div
                className="mb-1 ml-3 border-l-[0.5px] px-3 transition-all duration-300 hover:cursor-pointer hover:border-white hover:bg-gray-500 hover:text-white"
                onClick={() => {
                  setIsElementClick(!isElementClick);
                  setIsStatusClick(false);
                }}
              >
                Element
              </div>
              {isElementClick &&
                elements?.map((item) => (
                  <Link
                    to={`element/${item}`}
                    className={`ml-5 block py-1 pl-1 capitalize hover:cursor-pointer hover:text-white bg-${item}`}
                    key={item}
                  >
                    {item}
                  </Link>
                ))}
            </div>
            <div className="border-gray-300 text-gray-300">
              <div
                className="my-1 ml-3 border-l-[0.5px] px-3 transition-all duration-300 hover:cursor-pointer hover:border-white hover:bg-gray-500 hover:text-white"
                onClick={() => {
                  setIsStatusClick(!isStatusClick);
                  setIsElementClick(false);
                }}
              >
                Status Effects
              </div>
              {isStatusClick &&
                status?.map((item) => (
                  <Link
                    to={`status/${item}`}
                    className={`ml-5 block py-1 pl-1 capitalize hover:cursor-pointer hover:bg-gradient-to-tl hover:from-slate-300 hover:to-stone-600 hover:text-white`}
                    key={item}
                  >
                    {item}
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
