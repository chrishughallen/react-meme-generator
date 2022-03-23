import './Meme.css';
import memes from './memes.js';
import {useState} from 'react'

export default function Meme(props) {
  return(
  <div className="meme">
    <div className="meme-overlay">
      <h2 className="top-text">{props.topText}</h2>
      <h2 className="bottom-text">{props.bottomText}</h2>
    </div>
    <img src={props.randomImage}/>
  </div>
  )
}