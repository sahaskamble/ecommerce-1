'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Shop() {
  // Sample product data with better images
  const products = [
    {
      id: 1,
      name: "Round Lab Hat",
      price: "$35.00",
      colors: ["#000000", "#FF0000"],
      image: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c",
      rating: 5
    },
    {
      id: 2,
      name: "Leather Mini Skirt",
      price: "$75.00",
      colors: ["#808080"],
      image: "https://images.unsplash.com/photo-1548624313-0396c75e4b63",
      rating: 4
    },
    {
      id: 3,
      name: "Long Sleeve Crop",
      price: "$45.00",
      colors: ["#000000", "#FFFFFF"],
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
      rating: 5
    },
    {
      id: 4,
      name: "Fancy Panama Hat",
      price: "$22.00",
      colors: ["#000000", "#4B5563"],
      image: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c",
      rating: 4
    },
    {
      id: 5,
      name: "Loose Plain Top",
      price: "$25.00",
      colors: ["#000000"],
      image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992",
      rating: 5
    },
    {
      id: 6,
      name: "Oversized Jacket",
      price: "$95.00",
      colors: ["#FF0000", "#000000"],
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a",
      rating: 5
    },
    {
      id: 7,
      name: "Beckham Jacket",
      price: "$95.00",
      colors: ["#000000", "#808080"],
      image: "https://images.unsplash.com/photo-1525450824786-227cbef70703",
      rating: 4
    },
    {
      id: 8,
      name: "Formal Black Dress",
      price: "$120.00",
      colors: ["#000000", "#4B5563"],
      image: "https://images.unsplash.com/photo-1630953899906-d16511a72558",
      rating: 5
    },
    {
      id: 9,
      name: "Polka Dot Dress",
      price: "$85.00",
      colors: ["#000000", "#FFFFFF"],
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
      rating: 4
    },
  ];

  // Filter states
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('best-selling');

  // Available sizes
  const sizes = ['XS', 'S', 'M', 'L'];

  // Available colors for filter with better organization
  const availableColors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#000000", // Black
    "#FFFFFF", // White
  ];

  // Collections
  const collections = [
    'All products',
    'Best sellers',
    'New arrivals',
    'Trending'
  ];

  // Tags
  const tags = [
    'Top Hat', 'Polo', 'Suit', 'Silk', 'Vintage',
    'Dress', 'Evening', 'Elegant'
  ];

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white perspective-1000">
      {/* Navigation with subtle float effect */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-white z-50 py-4 border-b sticky top-0 backdrop-blur-sm bg-white/80"
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">FASCO</div>
            <div className="flex space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Shop', href: '/shop' },
                { name: 'Products', href: '#' },
                { name: 'Pages', href: '#' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-600 hover:text-black transition-colors nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Header with 3D text effect */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl font-light mb-3 animate-float text-3d">Fashion</h1>
        <div className="text-sm text-gray-500 hover-lift">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span>Fashion</span>
        </div>
      </motion.header>

      <div className="max-w-[1400px] mx-auto px-8 pb-16">
        <div className="flex gap-12">
          {/* Animated sidebar */}
          <motion.aside 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 flex-shrink-0"
          >
            <div className="sticky top-4">
              <h2 className="text-xl font-medium mb-8">Filters</h2>
              
              {/* Size Filter */}
              <div className="mb-8 border-b pb-6">
                <h3 className="text-sm font-medium mb-4">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`border py-2 text-sm transition-all ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-200 hover:border-black'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8 border-b pb-6">
                <h3 className="text-sm font-medium mb-4">Colors</h3>
                <div className="grid grid-cols-5 gap-3">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColors.includes(color) 
                          ? 'border-black ring-2 ring-gray-200' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        if (selectedColors.includes(color)) {
                          setSelectedColors(selectedColors.filter(c => c !== color));
                        } else {
                          setSelectedColors([...selectedColors, color]);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8 border-b pb-6">
                <h3 className="text-sm font-medium mb-4">Prices</h3>
                <div className="space-y-3">
                  {[
                    { range: "$0.00 - $49.99", checked: true },
                    { range: "$50.00 - $99.99", checked: false },
                    { range: "$100.00 - $149.99", checked: false },
                    { range: "$150.00 - $199.99", checked: false }
                  ].map((price) => (
                    <label key={price.range} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        defaultChecked={price.checked}
                        className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
                        {price.range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8 border-b pb-6">
                <h3 className="text-sm font-medium mb-4">Brands</h3>
                <div className="space-y-3">
                  {[
                    { name: "Zara", count: "112" },
                    { name: "H&M", count: "83" },
                    { name: "Pull&Bear", count: "47" },
                    { name: "Nike", count: "65" },
                    { name: "Adidas", count: "34" }
                  ].map((brand) => (
                    <label key={brand.name} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
                          {brand.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">({brand.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Collections */}
              <div className="mb-8 border-b pb-6">
                <h3 className="text-sm font-medium mb-4">Collections</h3>
                <div className="space-y-3">
                  {collections.map((collection) => (
                    <div 
                      key={collection} 
                      className="text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                    >
                      {collection}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 
                        transition-colors cursor-pointer text-gray-600 hover:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main content with stagger effect */}
          <motion.main 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex-1"
          >
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-4">
                <select 
                  className="border p-2 bg-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="best-selling">Best Selling</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 border hover:border-black">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z"/>
                  </svg>
                </button>
                <button className="p-2 border hover:border-black">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 4h4v4H2V4zm6 0h4v4H8V4zm6 0h4v4h-4V4zM2 10h4v4H2v-4zm6 0h4v4H8v-4zm6 0h4v4h-4v-4z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid with hover effects */}
            <div className="grid grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  className="group transform-gpu hover:translate-z-8 transition-transform duration-300"
                >
                  <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg shadow-sm
                    hover:shadow-xl transition-all duration-300">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transform-gpu group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating color indicators */}
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {product.colors.map((color, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.1 }}
                          className="w-4 h-4 rounded-full border border-white shadow-lg"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 
                      transition-colors duration-300 flex items-center justify-center opacity-0 
                      group-hover:opacity-100">
                      <button className="px-6 py-2 bg-white text-black transform-gpu 
                        -translate-y-10 group-hover:translate-y-0 transition-all duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-start"
                  >
                    <div>
                      <h3 className="font-medium hover-lift">{product.name}</h3>
                      <div className="flex text-yellow-400 text-sm animate-pulse">
                        {'★'.repeat(product.rating)}
                      </div>
                    </div>
                    <span className="font-medium hover-lift">{product.price}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 space-x-2">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 flex items-center justify-center border ${
                    page === 1 ? 'border-black' : 'border-gray-200 hover:border-black'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
} 