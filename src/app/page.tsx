'use client'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Product = {
  id: string
  name: string
  price: number
  image: string
  description?: string
  category?: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    (async () => {
      const res = await axios.get('/api/products')
      if (res.data.data) {
        setProducts(res.data.data)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <title>SupplyHomie - Home</title>
      </Head>

      <header className="bg-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SupplyHomie</h1>
          <nav className="space-x-4">
            <a href="#" className="text-white hover:text-blue-500 transfrom ">Home</a>
            <a href="#" className="text-white hover:text-blue-500">Shop</a>
            <a href="#" className="text-white hover:text-blue-500">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <a href="/profile" className="text-white">
                {/* Placeholder for a profile icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </a>
            ) : (
              <>
                <a href="/login" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">Login</a>
                <a href="/register" className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700">Register</a>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="bg-black-50 min-h-screen">
        <section className=" text-center py-16">
          <h2 className="text-4xl font-bold text-white-800 mb-4">Welcome to SupplyHomie</h2>
          <p className="text-lg text-white-700">Best choice for whoever that looking for Many kind of water supply from a nice homie</p>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h3 className="text-black text-2xl font-semibold mb-6">Featured Products</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 drop-shadow-lg cursor-pointer">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4 scale-100 hover:scale-105 transition-transform duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
                <h4 className="text-black mt-4 text-lg font-semibold">{product.name}</h4>
                <p className="text-blue-600 font-bold">{product.price}</p>
                <p className="text-gray-600 mt-2">{product.description}</p>


                <p
                  className="inline-block mt-3 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full shadow-sm
                    hover:bg-blue-700 transition-colors duration-200"
                >
                  {product.category}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      

<footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©{new Date().getFullYear()}. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Contact</a>
      </li>
    </ul>
  </div>
</footer>


    </>
  )
}