import React from "react";

import { Container, StoryBox, Title, Btn } from "./styles";

function Introduction() {
  return (
    <Container>
      <StoryBox>
        <Title>Início da Jornada</Title>
        <p style={{ textAlign: "justify", marginRight: 10, marginLeft: 10 }}>
          Após professor Oak te dar o seu primeiro pokemon você partiu para uma
          jornada de se tornar o melhor mestre pokemon de todos, após muito
          tempo de treinos e batalhas chegou o momento de ir ganhar as insígnias
          pokemon mas para isso é necessário escolher o melhor caminho até o
          topo{" "}
        </p>
        <Btn>
          <p>Prosseguir</p>
        </Btn>
      </StoryBox>
    </Container>
  );
}

export default Introduction;
