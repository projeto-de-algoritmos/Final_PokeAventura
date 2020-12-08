import React from "react";
import StepWizard from "react-step-wizard";
import CityEnemies from "../CityEnemies/";
import Introduction from "../Introduction/";

// import { Container } from './styles';

function Home() {
  return (
    <StepWizard>
      <Introduction />
      <div>Alo2</div>
      <div>Alo3</div>
    </StepWizard>
  );
}

export default Home;
