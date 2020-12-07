import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import Pokemons from "../../common/Pokemons";

function ButtonPokemon({ pokemonIndex }) {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);
  const pokemon = Pokemons;

  useEffect(() => {
    const index = pokemonIndex;
    setSelectedPokemon(pokemon[index]);
  }, []);

  return (
    <Container>
      {selectedPokemon ? (
        <>
          <img alt="nome" src={selectedPokemon.img} />
          <p style={{ fontFamily: "Press Start 2P" }}>{selectedPokemon.name}</p>
        </>
      ) : (
        <>
          <p style={{ fontSize: 40, marginBottom: 20 }}>+</p>
          <p>Select Pokemon</p>
        </>
      )}
    </Container>
  );
}

export default ButtonPokemon;
