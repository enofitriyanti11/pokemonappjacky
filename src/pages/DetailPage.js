import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DetailPokemons from '../components/DetailPokemons'

export default function DetailPage() {
  return (
    <div>
      <Navbar />
        <DetailPokemons />
      <Footer />

    </div>
  )
}
