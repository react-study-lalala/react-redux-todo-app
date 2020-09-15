import React from 'react';
import './App.css';
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";
import styled from 'styled-components'

function App() {
  return (
    <AppWrap className="App">
      {/*<RandomColorBackgroundContainer />*/}
        <TodoListContainer />
        <DoneListContainer />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2 , 1fr);
`;


export default App;
