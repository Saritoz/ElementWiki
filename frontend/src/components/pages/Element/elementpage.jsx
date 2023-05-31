import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Subtitle from "../../SubTitle/subtitle";
import Title from "../../Title/title";
import Container from "../../Container/container";
import { getElement } from "../../../redux/apiRequest";

const ElementPage = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const element = useSelector(
    (state) => state.elementStore.elements?.currElement
  )

  useEffect(() => {
    getElement(name, dispatch)
  }, [name, dispatch])

  return (
    <Container>
      {element && (
        <>
          <Title name={element.name} />
          <img
            src={`/imgs/elements/${element.name}.webp`}
            alt=""
            className="mx-auto w-[150px] sm:w-[200px]"
          />
          <section className="mx-2 mt-5 md:mx-0">
            <Subtitle>Stronger/Weakness</Subtitle>
            <div className="flex items-center justify-center gap-4 sm:justify-start md:gap-6">
              <img
                src={`/imgs/elements/${element.weakness}.webp`}
                alt=""
                className="w-[40px] md:w-[50px]"
              />
              <div>
                <p className="text-lg text-purple-500">Weakness</p>
                <div className="text-center">
                  <i className="fa-solid fa-chevron-right animate-weakeness-element text-xl text-purple-300"></i>
                  <i
                    className="fa-solid fa-chevron-right animate-weakeness-element text-xl text-purple-300"
                    style={{ animationDelay: "1s" }}
                  ></i>
                  <i
                    className="fa-solid fa-chevron-right animate-weakeness-element text-xl text-purple-300"
                    style={{ animationDelay: "2s" }}
                  ></i>
                </div>
              </div>
              <img
                src={`/imgs/elements/${element.name}.webp`}
                alt=""
                className="w-[40px] md:w-[50px]"
              />
              <div>
                <p className="text-lg text-red-500">Stronger</p>
                <div className="text-center">
                  <i className="fa-solid fa-chevron-right animate-stronger-element text-xl text-red-300"></i>
                  <i
                    className="fa-solid fa-chevron-right animate-stronger-element text-xl text-red-300"
                    style={{ animationDelay: "1s" }}
                  ></i>
                  <i
                    className="fa-solid fa-chevron-right animate-stronger-element text-xl text-red-300"
                    style={{ animationDelay: "2s" }}
                  ></i>
                </div>
              </div>
              <img
                src={`/imgs/elements/${element.stronger}.webp`}
                alt=""
                className="w-[40px] md:w-[50px]"
              />
            </div>
          </section>
          <section className="mx-2 mt-5 md:mx-0">
            <Subtitle>Description</Subtitle>
            <p>{element.description}</p>
          </section>
          <section className="mx-2 mt-5 md:mx-0">
            <Subtitle>Abilities</Subtitle>
            <p>{element.abilities}</p>
          </section>
          <section className="mx-2 mt-5 md:mx-0">
            <Subtitle>Enemies</Subtitle>
            <p>{element.enemies}</p>
          </section>
          <section className="mx-2 mt-5 md:mx-0">
            <Subtitle>Summons</Subtitle>
            <p>{element.summon}</p>
          </section>
        </>
      )}
    </Container>
  );
};

export default ElementPage;
