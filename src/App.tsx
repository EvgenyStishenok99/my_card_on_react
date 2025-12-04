import React from 'react';
// import logo from './logo.svg';
import styled, {css} from 'styled-components';
import './App.css';
import logo from './images/Rectangle-1.png'



const AppContainer = styled.div`
  border-radius: 10px;
  width: 300px;
  height: 350px;
  
  margin: 200px auto;
  
  background-color: aliceblue;
 
 
`;

const ContentContainer = styled.div`
  padding: 10px 10px 22px 10px;
`

const CardImage = styled.img`
 
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #000;
 
  margin: 0 10px 20px 10px;
  
`;

const MainText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  color: #abb3ba;
  margin: 0 10px 20px 10px;
  
`;

const ButtonsContainer = styled.div`
  margin: 0 10px 20px 10px;
  display: flex;
  gap: 12px;
`;

const Button = styled.button<{blue?: string}>`
  border-radius: 5px;
  width: 86px;
  height: 30px;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  
  ${props => {
    if (props.blue) {
      return css`
        border: none;
        background: #4e71fe;
        color: #fff;
      `
    }
    
    return css`
      border-color: #4e71fe;
      background: #fff;
      color: #4e71fe;
    `
  }}
`




function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <CardImage
          src={logo}
          alt="картинка"
        />
        <Title>Headline</Title>
        <MainText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</MainText>
        <ButtonsContainer>
          <Button blue={'true'}>See more</Button>
          <Button>Save</Button>
        </ButtonsContainer>
    </ContentContainer>
    </AppContainer>
  );
}

export default App;
