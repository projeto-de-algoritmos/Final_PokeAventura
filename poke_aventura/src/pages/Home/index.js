import React from "react";
import StepWizard from "react-step-wizard";
import CityEnemies from "../CityEnemies/";
import Introduction from "../Introduction/";
import Ending from "../Ending/";

// import { Container } from './styles';

function Home() {
  return (
    <StepWizard>
      <Introduction />
      <Ending />
      <CityEnemies />
    </StepWizard>
  );
}

export default Home;
