import React, { useCallback } from 'react';
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
  MarkImage
} from './styles';

const RED = 0;
const BLUE = 1;
const GREEN = 2;
const ORANGE = 3;
const BLUE_LIGHT = 4;

const NODES = {
  red:{
    id: RED,
    image: MARK_RED,
    edge: [BLUE, GREEN]
  },
  blue:{
    id: BLUE,
    image: MARK_RED,
    edge: [GREEN, ORANGE],
  },
  green:{
    id: GREEN,
    image: MARK_RED,
    edge: [ORANGE],
  },
  blueLight: {
    id: BLUE_LIGHT,
    image: MARK_RED,
    edge: [GREEN],
  }
}

function Map() {
  return (
    <Container>
      <PersonImage src={ASH}/>
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