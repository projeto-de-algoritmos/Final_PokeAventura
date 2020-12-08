import React from "react";

import { Container, StoryBox, Title, Btn, Row } from "./styles";
import { BADGES } from "../../assets";

function Ending({ nextStep }) {
  return (
    <Container>
      <StoryBox>
        <Title>Fim !</Title>
        <p style={{ textAlign: "justify", marginRight: 10, marginLeft: 10 }}>
          Parabéns sua jornada para se tornar um mestre pokémon acabou bem
          graças ao pequeno caminho tomado e com a inteligencia de saber com que
          batalhar primeiro.
        </p>
        <Row>
          <img src={BADGES} style={{ height: 175 }} />
        </Row>
      </StoryBox>
    </Container>
  );
}

export default Ending;
