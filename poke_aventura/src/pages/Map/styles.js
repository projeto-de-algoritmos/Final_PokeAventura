import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ContextImage = styled.div`
  align-items: center;
  justify-content: center;
  width: 65vw;
  height: 65vh;
  position: relative;
`;

export const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PersonImage = styled.img`
  width: 40vh;
  height: 45vh;
  object-fit: cover;
  position: absolute;
  bottom: 0;
`;

export const MarkImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  position: absolute;
`;

export const Button = styled.button`
  height: 50px;
  margin-top: 20px;
  padding: 0px 50px;
  align-items: center;
  border-radius: 20px;
  outline:none;
  position: absolute;
  left: 20px;
`;

export const ContainerTracking = styled.button`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 25%;
  top: 15px;
  background-color: transparent;
  border: none;
`;

export const MarkTracking = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export const ContainerArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 10px;
  }
`;


export const ButtonNext = styled.button`
  height: 50px;
  margin-top: 20px;
  padding: 0px 50px;
  align-items: center;
  border-radius: 20px;
  outline:none;
  position: absolute;
  right: 20px;
  bottom: 20px
`;