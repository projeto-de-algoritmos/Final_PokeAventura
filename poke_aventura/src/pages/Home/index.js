import React from "react";
import StepWizard from "react-step-wizard";
import CityEnemies from "../CityEnemies/";
import Introduction from "../Introduction/";
import Map from "../Map/";

// import { Container } from './styles';

function Home() {
  return (
    <StepWizard>
      <Introduction />
      <Map />
      <div>Alo2</div>
    </StepWizard>
  );
}

export default Home;
