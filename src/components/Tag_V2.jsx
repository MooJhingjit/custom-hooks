import React, { useState } from 'react'
import useGif from '../useGif'

export default function Tag() {

  const [tag, setTag] = useState('dogs')
  const { gif, fetchGif } = useGif(tag)

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <input type="text" value={tag} onChange={e => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
    </div>
  )
}
