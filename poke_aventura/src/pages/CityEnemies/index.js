import React, { useState, useEffect } from "react";
import ButtonPokemon from "../../components/ButtonPokemon";
import { Container, Btn, Column, Step, CityName, ColumnTeste, ButtonNext } from "./styles";
import rocket1 from "../../assets/rocket1.png";
import rocket2 from "../../assets/rocket2.png";
import rocket3 from "../../assets/rocket3.png";
import api from "../../services/api";
import { mergeSort } from "../../utils/merge";
import CircularProgress from "@material-ui/core/CircularProgress";

//const giovanni = "../../assets/giovanni.png";

function CityEnemies({nextStep, previousStep}) {
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleOrganize() {
    setIsLoading(true);
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
    setIsLoading(false);
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

  console.log(enemyTeam);

  return (
    <Step>
      <CityName>Último desafio</CityName>
      <div style={{ width: "60%", textAlign: "justify" }}>
        <p>
          Esses serão os seus últimos inimigos antes de virar um mestre pokemon,
          para se preparar para a batalha que tal ordernar do mais forte ao mais
          fraco ? para isso clique no botão abaixo e descubra o poder dos seus
          oponentes
        </p>
      </div>
      <Btn onClick={handleOrganize}>
        <p>Descobrir o poder</p>
      </Btn>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ColumnTeste>
          {enemyTeam.map((enemy) => {
            return (
              <Container key={enemy.index}>
                <Column>
                  <img src={enemy.sprite} />

                  {enemy.totalForce ? (
                    <Column>
                      <p>Força total </p>
                      <p>{enemy.totalForce}</p>
                    </Column>
                  ) : (
                    <Column>
                      <p>Força total </p>
                      <p>???</p>
                    </Column>
                  )}
                </Column>
                <ButtonPokemon pokemonIndex={enemy.pokemons[0]} />
                <ButtonPokemon pokemonIndex={enemy.pokemons[1]} />
                <ButtonPokemon pokemonIndex={enemy.pokemons[2]} />
              </Container>
            );
          })}
        </ColumnTeste>
      )}

      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ButtonNext style={{marginRight: 30}} onClick={previousStep}>
          <p>Voltar</p>
        </ButtonNext>

        <ButtonNext onClick={nextStep}>
          <p>Próximo</p>
        </ButtonNext>
      </div>
    </Step>
  );
}

export default CityEnemies;
