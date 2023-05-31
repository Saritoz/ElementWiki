import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStatus } from "../../../redux/apiRequest";
import Container from "../../Container/container";
import Subtitle from "../../SubTitle/subtitle";
import Title from "../../Title/title";

const StatusPage = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const status = useSelector((state) => state.statusStore.statuses?.currStatus);

  useEffect(() => {
    getStatus(name, dispatch);
  }, [name, dispatch]);

  return (
    <Container>
      {status && (
        <>
          <Title name={status.name}></Title>
          <img
            src={`/imgs/statusEffects/${status.name}.webp`}
            alt=""
            className="mx-auto w-[150px] sm:w-[200px]"
          />
          <section className="mx-2 mt-5 md:mx-0">
            <Subtitle>Description</Subtitle>
            <p>{status.description}</p>
          </section>
        </>
      )}
    </Container>
  );
};

export default StatusPage;
