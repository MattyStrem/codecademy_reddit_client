import React from 'react';
import './css/App.css';

import Header from "./features/header/header"
import Main_Section from './features/main_section/main_section';
import Subreddits from './features/subreddits/Subreddits';


function App() {
  return (
    <>
      <Header />
      <main>
        <Main_Section />        
      </main>    
      <aside>
        <Subreddits />
      </aside>  
    </>
  );
}

export default App;
