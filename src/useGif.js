import { useState, useEffect } from 'react'
import axios from 'axios'
// API
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif(tag) {
  const [gif, setGif] = useState('')

  const fetchGif = async (tag) => {
    const { data: { data, meta } } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    setGif(data.images.downsized_large.url)
  }

  useEffect(() => {
    fetchGif(tag);
    console.log('one time');
  }, [])

  return { gif, fetchGif };
}
