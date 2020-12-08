import React, { useCallback } from 'react';
import jsgraphs from 'js-graph-algorithms';

import { 
  MAP_POKEMON,
  ASH, 
  MARK_RED,
  MARK_BLUE,
  MARK_BLUE_LIGHT,
  MARK_GREEN,
  MARK_ORANGE,
} from '../../assets';

import { 
  Container, 
  MapImage, 
  ContainerImage, 
  PersonImage, 
  ContextImage,
  MarkImage,
  Button
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
    image: MARK_RED,
    edge: [GREEN, ORANGE],
  },
  {
    id: GREEN,
    image: MARK_RED,
    edge: [ORANGE],
  },
  {
    id: ORANGE,
    image: MARK_RED,
    edge: [BLUE_LIGHT],
  },
  {
    id: BLUE_LIGHT,
    image: MARK_RED,
    edge: [GREEN],
  }
]

function Map() {

  const generateGraph = useCallback(()=>{
    // Definição do tamanho do grafo
    const g = new jsgraphs.WeightedDiGraph(5);

    // Definição das arestas
    NODES.forEach(element => {
      element.edge.forEach(item=>{
        console.log(element.id, item)
        g.addEdge(new jsgraphs.Edge(element.id, item, 5.0));
      })
    });

    const dijkstra = new jsgraphs.Dijkstra(g, 0);

    console.log(dijkstra.pathTo(BLUE_LIGHT));
  }, []);

  return (
    <Container>
      <PersonImage src={ASH}/>
      <Button onClick={generateGraph}>
        <p>Aperte</p>
      </Button>
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