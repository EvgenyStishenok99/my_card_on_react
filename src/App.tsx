import React from 'react';
// import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import logo from './images/Rectangle-1.png'


const AppContainer = styled.div`
  width: 300px;
    height: 500px;
`;

const CardImage = styled.img`
  margin: 10px 10px 20px 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const MainText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  color: #abb3ba;
  margin: 20px ;
`;

const ButtonsContainer = styled.div`
  
`;

const FirstButton = styled.button`
  border-radius: 5px;
  border: none;
  width: 86px;
  height: 30px;
  background: #4e71fe;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  color: #fff;
  margin: 0 12px 22px 20px;`

const SecondButton = styled.button`
  border-radius: 5px;
  border-color: #4e71fe;
  width: 86px;
  height: 30px;
  background: #fff;

  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  color: #4e71fe;`


function App() {
  return (
    <AppContainer>

        <CardImage
          src={logo}
          alt="картинка"
        />
        <Title>Headline</Title>
        <MainText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</MainText>
        <ButtonsContainer>
          <FirstButton>See more</FirstButton>
          <SecondButton>Save</SecondButton>
        </ButtonsContainer>

    </AppContainer>
  );
}

export default App;
