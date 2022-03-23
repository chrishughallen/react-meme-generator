import './App.css';
import {useEffect, useState} from 'react';
import Meme from './Meme.js';

function App() {

  const [allMemesData, setAllMemesData] = useState([])

  const [meme, setMeme] = useState({
    topText: "If you could make a react meme generator",
    bottomText: "That would be great",
    randomImage: "https:\/\/i.imgflip.com/c2qn.jpg"
  })
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then(data => setAllMemesData(data.data.memes))
  }, [])

  const updateMemeImage = () => {
    setMeme((oldMeme) => (
      {...oldMeme, randomImage: allMemesData[Math.floor(Math.random()*allMemesData.length)].url }
      ))
  }

  const handleTextInput = (e) => {
    let {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme, [name]: value 
    }))
  }

  return (
    <div className="App">
      <h1>React Meme Generator</h1>
      <div className="form">
        <div className="form-field">
          <label htmlFor="topText">Top Text</label>
          <input
            id="topText"
            placeholder="Top Text"
            className="form-input" 
            type="text" 
            name="topText" 
            value={meme.topText}
            onChange={(e) => handleTextInput(e)}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="bottomText">Bottom Text</label>
          <input 
            id="bottomText"
            placeholder="Bottom Text"
            className="form-input" 
            type="text" 
            name="bottomText" 
            value={meme.bottomText}
            onChange={(e) => handleTextInput(e)}
          />   
        </div>

        <button className="form-submit" onClick={updateMemeImage} type="">Get a new meme image</button>
      </div>

      <Meme {...meme} />
    </div>
  );
}

export default App;
