import {  useState } from "react";
import axios from "axios";
import './app.scss'
function App() {
  const [data,setData]=useState({})
  const getQuote=()=>{
    axios.get('https://api.quotable.io/random')
    .then(response=>{
      console.log(response.data)
      setData(response.data)
    })
    .catch(error=>[
      console.log(error)
    ])
  }
  return (
    <div className="app">
      <h2>Quote Generator</h2>
      <div className="top">
        {data!=null && <div><span>{data.content}</span><span className="author">--{data.author}</span></div>

        }
      </div>
      <div className="bottom">
        <button onClick={getQuote}>Get Quote</button>
      </div>
    </div>
  );
}

export default App;
