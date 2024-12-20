'use client'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate zoom and opacity based on scroll position
  const scale = Math.max(1, 1 + scrollY * 0.001);
  const opacity = Math.max(0, 1 - scrollY * 0.002);
  const contentOpacity = Math.min(1, (scrollY - 300) * 0.005);

  // Hero section images
  const heroImages = {
    left: "https://images.unsplash.com/photo-1516826957135-700dedea698c", // Man sitting in brown jacket
    center: [
      { link: "https://images.unsplash.com/photo-1525299374597-911581e1bdef" }, // Group of women
      { link: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e" }, // Women smiling
    ],
    right: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8", // Man in orange sweater
  };

  // Deal section images
  const dealImages = [
    "https://images.unsplash.com/photo-1612336307429-8a898d10e223", // Black dress
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446", // Blue dress
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956", // Another dress
    "https://images.unsplash.com/photo-1551163943-3f6a855d1153", // Fashion item
  ];

  // New arrivals images
  const newArrivalsImages = [
    {
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      name: "Spring Dress",
      price: "$95.00",
      originalPrice: "$120.00"
    },
    {
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      name: "Boho Style",
      price: "$85.00",
      originalPrice: "$110.00"
    },
    {
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
      name: "Summer Top",
      price: "$95.00",
      originalPrice: "$120.00"
    },
    {
      image: "https://images.unsplash.com/photo-1602810316693-3667c854239a",
      name: "Casual Wear",
      price: "$89.00",
      originalPrice: "$115.00"
    },
    {
      image: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a",
      name: "Winter Style",
      price: "$92.00",
      originalPrice: "$118.00"
    },
    {
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
      name: "Fashion Top",
      price: "$82.00",
      originalPrice: "$108.00"
    }
  ];

  // Instagram feed images
  const instagramImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2",
    "https://images.unsplash.com/photo-1566206091558-7f218b696731"
  ];

  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  return (
    <main className="min-h-screen bg-white relative">
      {/* Navigation - Now outside the scroll effect */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 px-4 border-b">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">FASCO</div>
            <div className="flex space-x-8">
              {[
                { name: 'New In', href: '/' },
                { name: 'Sale', href: '/shop' },
                { name: 'Best Seller', href: '#' },
                { name: 'Features', href: '#' },
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
            <button className="px-4 py-1 bg-black text-white rounded-sm text-sm">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Zoom Effect */}
      <div 
        ref={heroRef}
        className="fixed inset-0 w-full h-screen overflow-hidden pt-16"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        <div className="grid grid-cols-12 gap-4 h-full">
          {/* Left Image */}
          <div className="col-span-4 relative h-full">
            <Image
              src={heroImages.left}
              alt="Man sitting"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Center Content */}
          <div className="col-span-4 flex flex-col gap-4 bg-white">
            <div className="relative h-[200px]">
              <Image
                src={heroImages.center[0].link}
                alt="Group"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h1 className="text-7xl font-light">
                ULTIMATE
                <br />
                <span className="text-[130px] tracking-[15px] font-thin">SALE</span>
              </h1>
              <p className="text-sm mb-6">NEW COLLECTION</p>
              <Link 
                href="/shop" 
                className="px-8 py-2 bg-black text-white text-sm hover:bg-gray-900 transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
            <div className="relative h-[200px]">
              <Image
                src={heroImages.center[1].link}
                alt="Women"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right Image */}
          <div className="col-span-4 relative h-full">
            <Image
              src={heroImages.right}
              alt="Man in orange"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Spacer to allow scrolling */}
      <div style={{ height: '100vh' }} />

      {/* Content that appears after scroll */}
      <div 
        ref={contentRef}
        className="relative z-10 bg-white"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${Math.max(0, -100 + scrollY * 0.2)}px)`,
        }}
      >
        {/* Brands */}
        <section className="border-y border-gray-200 py-6">
          <div className="flex justify-center items-center space-x-20">
            <div className="text-xl font-bold tracking-wider">CHANEL</div>
            <div className="text-xl font-bold tracking-wider">LOUIS VUITTON</div>
            <div className="text-xl font-bold tracking-wider">PRADA</div>
            <div className="text-xl font-bold tracking-wider">Calvin Klein</div>
            <div className="text-xl font-bold tracking-wider">DENIM</div>
          </div>
        </section>

        {/* Deals Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-medium">Deals Of The Month</h2>
              <p className="text-sm text-gray-500">Hurry, Before It's Too Late!</p>
            </div>
            <div className="flex gap-4">
              {[
                { value: '02', label: 'Days' },
                { value: '05', label: 'Hours' },
                { value: '45', label: 'Mins' },
                { value: '30', label: 'Secs' }
              ].map((timer) => (
                <div key={timer.label} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center font-mono text-lg">
                    {timer.value}
                  </div>
                  <div className="text-xs mt-1">{timer.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deals Slider */}
          <div className="relative">
            <div className="flex gap-4">
              {dealImages.map((image, index) => (
                <div key={index} className="relative w-1/4 hover-lift">
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={image}
                      alt={`Deal ${index + 1}`}
                      fill
                      className="object-cover image-zoom"
                      onLoadingComplete={() => handleImageLoad(`deal-${index}`)}
                    />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-sm
                      animate-fadeInUp" style={{ animationDelay: `${index * 200}ms` }}>
                      35% OFF
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md">←</button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md">→</button>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium">New Arrivals</h2>
            <p className="text-gray-500">Check out our latest collection of premium clothing</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {newArrivalsImages.map((item, index) => (
              <div key={index} 
                className="group hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-[400px] mb-4 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Product ${index + 1}`}
                    fill
                    className="object-cover image-zoom"
                    onLoadingComplete={() => handleImageLoad(`arrival-${index}`)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 
                    transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm
                    translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-2 bg-black text-white">Quick View</button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-red-500 line-through text-sm">{item.originalPrice}</span>
                    <div className="font-bold">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-2 bg-black text-white">View All Products</button>
          </div>
        </section>

        {/* Peaky Blinders Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-2">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac"
                alt="Peaky Blinders"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-12">
              <h2 className="text-3xl font-bold mb-4">Peaky Blinders</h2>
              <p className="text-gray-600 mb-6">
                Discover our exclusive collection inspired by the iconic style of Peaky Blinders
              </p>
              <div className="text-2xl font-bold mb-6">$120.00</div>
              <button className="px-8 py-2 bg-black text-white self-start">Shop Now</button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
            {[
              { title: 'High Quality', desc: 'crafted from top materials' },
              { title: 'Warranty Protection', desc: 'Over 2 years' },
              { title: 'Free Shipping', desc: 'Order over 150 $' },
              { title: '24 / 7 Support', desc: 'Dedicated support' }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16">
          <h2 className="text-2xl font-medium text-center mb-12">Follow Us On Instagram</h2>
          <div className="grid grid-cols-7 gap-4">
            {instagramImages.map((image, index) => (
              <div key={index} 
                className="relative h-[200px] group animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image}
                  alt={`Instagram ${index + 1}`}
                  fill
                  className="object-cover"
                  onLoadingComplete={() => handleImageLoad(`instagram-${index}`)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 
                  transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 transform group-hover:scale-110">
                    @fasco
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe To Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Get the latest updates about new products and discounts!</p>
            <div className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 border flex-1 max-w-md"
              />
              <button className="px-8 py-3 bg-black text-white">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
