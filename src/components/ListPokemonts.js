import React from 'react'


const products = [
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
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
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
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
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

  function addedPokemon(products) {
    // Ambil data dari local storage (jika ada)
    const existingData = localStorage.getItem("myPokemon");
    const checkData = JSON.parse(existingData)

    // Jika data tidak ditemukan, buat array kosong
    const myPokemon = existingData ? JSON.parse(existingData) : [];

    const isDataExist = checkData && checkData.some((p) => p.id === products.id);

    if (isDataExist) {
      alert("Data sudah ada!");
    } else {
       // Tambahkan produk yang dipilih ke dalam array myPokemon
    myPokemon.push(products);
    // Simpan data ke local storage
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
    // Tampilkan pesan sukses
    alert("Pokemon berhasil ditambahkan ke My Pokemon!");
    }
    
  }
  
  

export default function ListPokemonts() {
  return (
    <div className="">

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.type}</p>
            <div className="relative">
              <button onClick={()=> addedPokemon(product)} className="btn absolute btn-sm top-0 right-0">Add xxxx</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
