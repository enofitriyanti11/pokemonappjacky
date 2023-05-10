/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const onPress = () => {
    navigate('/mypokemons')
  }

  return (
    <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse ml-4 mr-4">
            <img src={require("../img/pokemonHero.jpeg")} className="max-w-sm rounded-lg shadow-2xl" />
            <img src="img/pokemonHero.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button onClick={onPress} className="btn btn-primary bg-zinc-700 border-0 hover:bg-slate-700">Get Started</button>
        </div>
        </div>
    </div>
  )
}
