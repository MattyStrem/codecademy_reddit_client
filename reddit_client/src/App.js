import logo from './logo.svg';
import './css/App.css';

import Header from "./features/header/header"


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="posts-container">
          <div className="post">
            <h3 className="post-header-container">Post 1</h3>
            <img className="post-image-container"/>
            <div className="post-comment-container">
              <p>User</p>
              <p>time ago</p>
              <p>comments</p>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
