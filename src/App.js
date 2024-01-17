import { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage/AuthPage';

function App() {

  //initialazing user to null
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sticky Memories</h1>
        <AuthPage/>
      </header>
    </div>
  );
}

export default App;
