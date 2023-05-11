import React from 'react'
import ListPokemonts from '../components/ListPokemonts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ListPokemonsPage() {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h1 className="text-zinc-700 py-5 font-bold text-5xl">List Pokemons</h1>
                <ListPokemonts />
            </div>
            <Footer />
        </div>
    )
}
