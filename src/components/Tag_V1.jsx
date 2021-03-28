import React, { useState, useEffect } from 'react'
import axios from 'axios'
// API
const API_KEY = process.env.REACT_APP_API_KEY;

export default function TAG() {

  const [tag, setTag] = useState('dogs')
  const [gif, setGif] = useState('')

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data: { data, meta } } = await axios.get(url);
    setGif(data.images.downsized_large.url)
  }

  useEffect(() => {
    fetchGif(tag);
  }, [])
  const handleClick = () => {
    fetchGif(tag);
  }

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <input type="text" value={tag} onChange={e => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  )
}
