import React, { useState, useEffect } from "react";
import ButtonPokemon from "../../components/ButtonPokemon";
import { Container, Btn } from "./styles";
import rocket1 from "../../assets/rocket1.png";
import rocket2 from "../../assets/rocket2.png";
import rocket3 from "../../assets/rocket3.png";
import api from "../../services/api";
import { mergeSort } from "../../utils/merge";

//const giovanni = "../../assets/giovanni.png";

function CityEnemies() {
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleOrganize() {
    var tempArray = enemyTeam;

    for await (let enemy of enemyTeam) {
      var teamTotalStrenght = 0;
      for await (let enemyPokemons of enemy.pokemons) {
        let response = await api.get(`pokemon/${enemyPokemons + 1}`);
        var totalForce =
          response.data.stats[1].base_stat + response.data.stats[2].base_stat;
        teamTotalStrenght = teamTotalStrenght + totalForce;
      }
      tempArray[enemy.index].totalForce = teamTotalStrenght;
    }

    let teste = mergeSort(tempArray);
    console.log(teste);
    setEnemyTeam(teste);
  }

  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      let sprite;
      switch (i) {
        case 1:
          sprite = rocket1;
          break;
        case 2:
          sprite = rocket2;
          break;
        case 3:
          sprite = rocket3;
          break;
      }

      let enemy = {
        index: i - 1,
        sprite: sprite,
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
            <img src={enemy.sprite} />
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
