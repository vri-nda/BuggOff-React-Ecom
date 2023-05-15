import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [apiData, setApiData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setApiData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const debouncedSearch = debounce((query) => {
    const filtered = apiData.filter((product) => {
      const { title, description } = product;
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        description.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredProducts(filtered);
  }, 300);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center pt-8 bg-black p-1 flex-grow px-2 py-4 pl-4">
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 w-10 rounded-md flex-grow cursor-pointer bg-pink-400 hover:bg-green-500">
          <input
            className="h-full w-[80vw] md:w-[90vw]  flex-shrink rounded-l-md focus:outline-none px-2"
            type="text"
            placeholder="Search Items..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              debouncedSearch(e.target.value);
            }}
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <a className="bg-blue-500 h-10 w-20 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600 p-5">
              Sign Up
            </a>
          </div>

          <div className="relative link flex items-center">
            <span className="top-[-0.75rem] absolute left-7  md:right-5 h-4 w-4 bg-yellow-100 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-7" />
            <p className="hidden md:inline  md:text-sm mt-2">Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div>
        <div className="flex items-center space-x-3 pb-4 pl-6 bg-black text-white text-sm">
          <p className="link">Business</p>
          <p className="link lg:inline-flex">Electronics</p>
          <p className="link lg:inline-flex">Food & Grocery</p>
        </div>
      </div>

     {/* Render the filtered products */}
     {searchQuery.length > 0 && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))
      ) : searchQuery.length > 0 && filteredProducts.length === 0 ? (
        <p>No matching products found.</p>
      ) : null}
    </header>
  );
}

export default Header;