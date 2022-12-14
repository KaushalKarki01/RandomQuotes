import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './quotes.css';
function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')
  const url = 'https://type.fit/api/quotes';
  const generateQuotes=()=>{
    axios.get(url).then((response) => {
      let randQuote = response.data;
      let randNum = Math.floor(Math.random()*randQuote.length);
      let randomQuote = randQuote[randNum];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(()=>{
    generateQuotes();
  },[])
  return (
    <div className='quoteGenerator'>
      <div className='container'>
        <div>
          <h2>{quote}</h2>
          <p>- {author}</p>
        </div>
        <button onClick={generateQuotes}>Generate Quotes</button>
      </div>
    </div>
  );
}

export default App;
