import React, { useCallback, useState } from 'react';
import jsgraphs from 'js-graph-algorithms';

import { 
  MAP_POKEMON,
  ASH, 
  MARK_RED,
  MARK_BLUE,
  MARK_BLUE_LIGHT,
  MARK_GREEN,
  MARK_ORANGE,
  ARROW
} from '../../assets';

import { 
  Container, 
  MapImage, 
  ContainerImage, 
  PersonImage, 
  ContextImage,
  MarkImage,
  Button,
  ContainerTracking,
  MarkTracking,
  ContainerArrow
} from './styles';

const RED = 0;
const BLUE = 1;
const GREEN = 2;
const ORANGE = 3;
const BLUE_LIGHT = 4;

const NODES = [
  {
    id: RED,
    image: MARK_RED,
    edge: [BLUE, GREEN]
  },
  { 
    id: BLUE,
    image: MARK_BLUE,
    edge: [GREEN, ORANGE],
  },
  {
    id: GREEN,
    image: MARK_GREEN,
    edge: [ORANGE],
  },
  {
    id: ORANGE,
    image: MARK_ORANGE,
    edge: [BLUE_LIGHT],
  },
  {
    id: BLUE_LIGHT,
    image: MARK_BLUE_LIGHT,
    edge: [GREEN],
  }
]

function Map() {
  const [arrayTracking, setArrayTracking] = useState(null);

  const generateGraph = useCallback(()=>{
    // Definição do tamanho do grafo
    const g = new jsgraphs.WeightedDiGraph(5);

    // Definição das arestas
    NODES.forEach(element => {
      element.edge.forEach(item=>{
        console.log(element.id, item)
        g.addEdge(new jsgraphs.Edge(element.id, item, Math.floor(Math.random() * 151) + 1));
      })
    });

    const dijkstra = new jsgraphs.Dijkstra(g, 0);
    console.log((dijkstra.pathTo(BLUE_LIGHT)))
    setArrayTracking(dijkstra.pathTo(BLUE_LIGHT));
  }, []);

  return (
    <Container>
      <PersonImage src={ASH}/>
      <Button onClick={generateGraph}>
        <p>Gerar menor caminho</p>
      </Button>

      {arrayTracking && (
        <ContainerTracking>
          <MarkTracking src={MARK_RED}/>
          <ContainerArrow>
            <MarkTracking src={ARROW}/>  
            <p>{`Peso ${arrayTracking[0].weight}`}</p>
          </ContainerArrow>
          {arrayTracking.map((item, index)=>(
            <div style={{display: 'flex', flexDirection: 'row'}} key={index}>
              <MarkTracking src={NODES[item.w].image}/>

              {arrayTracking.length - 1 > index && (
                <ContainerArrow>
                  <MarkTracking src={ARROW}/>  
                  <p>{`Peso ${arrayTracking[index+1].weight}`}</p>
                </ContainerArrow>
              )}
            </div>
          ))}
        </ContainerTracking>
      )}

      <ContainerImage>
        <ContextImage>
          <MarkImage style={{bottom: 50, right:'45%'}} src={MARK_RED}/>
          <MarkImage style={{bottom: '45%', right:'45%'}} src={MARK_BLUE}/>
          <MarkImage style={{top: 20, right:'50%'}} src={MARK_BLUE_LIGHT}/>
          <MarkImage style={{bottom: '30%', right:'20%'}} src={MARK_GREEN}/>
          <MarkImage style={{top: '30%', right:'25%'}} src={MARK_ORANGE}/>
          <MapImage src={MAP_POKEMON} />
        </ContextImage>
      </ContainerImage>
    </Container>
  );
}

export default Map;