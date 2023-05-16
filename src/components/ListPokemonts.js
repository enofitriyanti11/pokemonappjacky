/* eslint-disable no-global-assign */
import React, { useEffect,useState } from 'react'
import axios from 'axios';


// const pokemons = [
//     {
//       id: 1,
//       name: 'Fennekin Pokemon',
//       href: '#',
//       type: 'Api',
//       imageSrc: 'img/edward.png',
//       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     },
//     {
//       id: 2,
//       name: 'Hawlucha Pokemon',
//       href: '#',
//       type: 'Angin',
//       imageSrc: 'img/Hawlucha.png',
//       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//     },
//     {
//       id: 3,
//       name: 'Fletchinder Pokemon',
//       href: '#',
//       type: 'Angin',
//       imageSrc: 'img/Fletchinder.png',
//       imageAlt: 'Person using a pen to cross a task off a pokemonivity paper card.',
//     },
//     {
//       id: 4,
//       name: 'Mareep Pokemon',
//       href: '#',
//       type: 'Listrik',
//       imageSrc: 'img/dombapokemon.png',
//       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//     },
//     {
//         id: 5,
//         name: 'Fennekin Pokemon',
//         href: '#',
//         type: 'Api',
//         imageSrc: 'img/edward.png',
//         imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//       },
//       {
//         id: 6,
//         name: 'Hawlucha Pokemon',
//         href: '#',
//         type: 'Angin',
//         imageSrc: 'img/Hawlucha.png',
//         imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//       },
//       {
//         id: 7,
//         name: 'Fletchinder Pokemon',
//         href: '#',
//         type: 'Angin',
//         imageSrc: 'img/Fletchinder.png',
//         imageAlt: 'Person using a pen to cross a task off a pokemonivity paper card.',
//       },
//       {
//         id: 8,
//         name: 'Mareep Pokemon',
//         href: '#',
//         type: 'Listrik',
//         imageSrc: 'img/dombapokemon.png',
//         imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//       },

//   ]
  
  function addPokemon(pokemon) {
    // Ambil data dari local storage (jika ada)
    const existingData = localStorage.getItem("myPokemon");
  
    // Jika data tidak ditemukan, buat array kosong
    const myPokemon = existingData ? JSON.parse(existingData) : [];
  
    const isDataExist = myPokemon.some((p) => p.name === pokemon.name);
  
    if (isDataExist) {
      alert("Pokemon sudah ada!");
    } else {
      // Tambahkan pokemon yang dipilih ke dalam array myPokemon
      myPokemon.push(pokemon);
      // Simpan data ke local storage
      localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
      // Tampilkan pesan sukses
      alert("Pokemon berhasil ditambahkan ke koleksi kamu!");
    }
  }
  
  

export default function ListPokemonts() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log("response" , response.data);
        const pokemonList = response.data.results;
        const pokemonData = [];

        for (const pokemon of pokemonList) {
          const pokemonResponse = await axios.get(pokemon.url);
          const pokemonImage = pokemonResponse.data.sprites.other.dream_world.front_default;

          pokemonData.push({
            name: pokemon.name,
            image: pokemonImage
          });
        }

        setPokemons(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div className="">
      <div className="grid mb-8 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {pokemons.map((pokemon,id) => (
          <div key={id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full my-8 overflow-hidden rounded-lg bg-gray-200 drop-shadow-lg xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="object-contain h-48 w-96 lg:h-48 lg:w-96"
              />
            </div>
            <h3 className="mt-4 ml-2 text-lg text-gray-900 font-bold">{pokemon.name}</h3>
            <p className="mt-1 text-sm font-medium text-gray-700">{pokemon.type}</p>
            <div className="mt-5 relative">
              <a  href={`/detail/${pokemon.name}`} className='ml-2 text-sm hover:link-hover'>See Details</a>
              <button onClick={()=> addPokemon(pokemon)} className="btn absolute btn-sm top-0 right-5"> + </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
