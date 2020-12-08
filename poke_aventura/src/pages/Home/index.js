import React from "react";
import StepWizard from "react-step-wizard";
import CityEnemies from "../CityEnemies/";
import Introduction from "../Introduction/";
import Ending from "../Ending/";
import Map from "../Map/";

// import { Container } from './styles';

function Home() {
  return (
    <StepWizard>
      <Introduction />
      <Map />
      <CityEnemies />
      <Ending />
    </StepWizard>
  );
}

export default Home;
