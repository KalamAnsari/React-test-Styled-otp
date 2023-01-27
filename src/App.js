import './App.css';
// import styled from 'styled-components';
import { StyledButton } from './components/button/Button.styles';
import Counter from './components/Counter';

// use theme components inside the app
import { ThemeProvider } from 'styled-components';

// const StyledButton=styled.button`
// border:2px solid red
// `

const theme={
  dark:{
    primary:"black",
    text:"white"
  },
  light:{
    primary:"white",
    text:"black"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
     <Counter/>
     {/* <StyledButton></StyledButton> */}
     <StyledButton variants="outline">button</StyledButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
