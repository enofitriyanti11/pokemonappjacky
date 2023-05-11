import React from 'react'


const pokemons = [
    {
      id: 1,
      name: 'Fennekin Pokemon',
      href: '#',
      type: 'Api',
      imageSrc: 'img/edward.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Hawlucha Pokemon',
      href: '#',
      type: 'Angin',
      imageSrc: 'img/Hawlucha.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Fletchinder Pokemon',
      href: '#',
      type: 'Angin',
      imageSrc: 'img/Fletchinder.png',
      imageAlt: 'Person using a pen to cross a task off a pokemonivity paper card.',
    },
    {
      id: 4,
      name: 'Mareep Pokemon',
      href: '#',
      type: 'Listrik',
      imageSrc: 'img/dombapokemon.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Fennekin Pokemon',
        href: '#',
        type: 'Api',
        imageSrc: 'img/edward.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Hawlucha Pokemon',
        href: '#',
        type: 'Angin',
        imageSrc: 'img/Hawlucha.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'Fletchinder Pokemon',
        href: '#',
        type: 'Angin',
        imageSrc: 'img/Fletchinder.png',
        imageAlt: 'Person using a pen to cross a task off a pokemonivity paper card.',
      },
      {
        id: 8,
        name: 'Mareep Pokemon',
        href: '#',
        type: 'Listrik',
        imageSrc: 'img/dombapokemon.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },

  ]
  
  function addPokemon(pokemon) {
    // Ambil data dari local storage (jika ada)
    const existingData = localStorage.getItem("myPokemon");
  
    // Jika data tidak ditemukan, buat array kosong
    const myPokemon = existingData ? JSON.parse(existingData) : [];
  
    const isDataExist = myPokemon.some((p) => p.id === pokemon.id);
  
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
  return (
    <div className="">

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {pokemons.map((pokemon) => (
          <a key={pokemon.id} href={pokemon.href} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={pokemon.imageSrc}
                alt={pokemon.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{pokemon.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{pokemon.type}</p>
            <div className="relative">
              <button onClick={()=> addPokemon(pokemon)} className="btn absolute btn-sm top-0 right-0">Add xxxx</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
