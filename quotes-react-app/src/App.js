import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [quote, setQuote]= useState(null);
  const [author, setAuthor]= useState(null);

  useEffect(() => {
    // const url = "http://localhost:5000/quotes/random"
    const url = "https://honey-clever-silkworm.glitch.me/quotes/random"
    fetch(url)
      .then((res) => res.json())
      .then((data)=> {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
   
        <div className="Quote"> "{quote}"</div>
        <div className="Author"> {author}</div>
    
        
      </header>
    </div>
  );
}

export default App;
