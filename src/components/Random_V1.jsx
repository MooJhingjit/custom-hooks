import React, { useState, useEffect } from 'react'
import axios from 'axios'
// API
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Random() {
  const [gif, setGif] = useState('')

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const { data: { data, meta } } = await axios.get(url);
    setGif(data.images.downsized_large.url)
  }

  useEffect(() => {
    fetchGif();
  }, [])
  const handleClick = () => {
    fetchGif();
  }

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  )
}
