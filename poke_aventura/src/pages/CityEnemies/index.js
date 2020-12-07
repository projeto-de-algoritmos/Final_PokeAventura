import React, { useState, useEffect } from "react";
import ButtonPokemon from "../../components/ButtonPokemon";
import { Container, Btn } from "./styles";
import rocket1 from "../../assets/rocket1.png";
import rocket2 from "../../assets/rocket2.png";
import rocket3 from "../../assets/rocket3.png";
import api from "../../services/api";

//const giovanni = "../../assets/giovanni.png";

function CityEnemies() {
  const [enemyTeam, setEnemyTeam] = useState([]);

  async function handleOrganize() {
    let response = await api.get("/pokemon/1");
    console.log(response.data);
  }

  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      let index;
      switch (i) {
        case 1:
          index = rocket1;
          break;
        case 2:
          index = rocket2;
          break;
        case 3:
          index = rocket3;
          break;
      }

      let enemy = {
        index: index,
        pokemons: [],
      };
      for (let j = 0; j < 3; j++) {
        const index = Math.floor(Math.random() * 151) + 1;
        enemy.pokemons[j] = index;
      }

      setEnemyTeam((enemyTeam) => [...enemyTeam, enemy]);
    }
  }, []);

  return (
    <>
      <Btn onClick={handleOrganize}>
        <p>Organizar</p>
      </Btn>
      {enemyTeam.map((enemy) => {
        return (
          <Container>
            <img src={enemy.index} />
            <ButtonPokemon pokemonIndex={enemy.pokemons[0]} />
            <ButtonPokemon pokemonIndex={enemy.pokemons[1]} />
            <ButtonPokemon pokemonIndex={enemy.pokemons[2]} />
          </Container>
        );
      })}
    </>
  );
}

export default CityEnemies;
