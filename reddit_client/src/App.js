import React from 'react';
import './css/App.css';

import Header from "./features/header/header"
import Main_Section from './features/main_section/main_section';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main_Section />        
      </main>      
    </div>
  );
}

export default App;
