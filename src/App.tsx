import React from 'react';
import './App.css';
import Movies from './movie/container/Movies';
import GlobalStyles from './GlobalStyles';

function App(props:any) {
  return (
    <div className="App">
        <GlobalStyles />
        <Movies {...props}/>
    </div>
  );
}

export default App;
   