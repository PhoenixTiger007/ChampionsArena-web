"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Mock data for products
const brandedMerchandise: Product[] = [
  {
    id: 1,
    name: "Champions Arena T-Shirt",
    price: 29.99,
    image: "/images/shop/tshirt.jpg",
  },
  { id: 2, name: "Logo Cap", price: 24.99, image: "/images/shop/cap.jpg" },
  { id: 3, name: "Sports Bag", price: 49.99, image: "/images/shop/bag.jpg" },
  {
    id: 4,
    name: "Water Bottle",
    price: 14.99,
    image: "/images/shop/bottle.jpg",
  },
  { id: 5, name: "Hoodie", price: 59.99, image: "/images/shop/hoodie.jpg" },
  {
    id: 6,
    name: "Wristband",
    price: 9.99,
    image: "/images/shop/wristband.jpg",
  },
  {
    id: 7,
    name: "Sports Towel",
    price: 19.99,
    image: "/images/shop/towel.jpg",
  },
  { id: 8, name: "Keychain", price: 7.99, image: "/images/shop/keychain.jpg" },
];

const tournamentMerchandise: Product[] = [
  {
    id: 9,
    name: "Tournament Jersey",
    price: 79.99,
    image: "/images/shop/jersey.jpg",
  },
  {
    id: 10,
    name: "Event Poster",
    price: 14.99,
    image: "/images/shop/poster.jpg",
  },
  {
    id: 11,
    name: "Commemorative Medal",
    price: 39.99,
    image: "/images/shop/medal.jpg",
  },
  {
    id: 12,
    name: "Tournament Program",
    price: 9.99,
    image: "/images/shop/program.jpg",
  },
  {
    id: 13,
    name: "Signed Basketball",
    price: 129.99,
    image: "/images/shop/basketball.jpg",
  },
  {
    id: 14,
    name: "Event Snapback",
    price: 34.99,
    image: "/images/shop/snapback.jpg",
  },
  {
    id: 15,
    name: "Tournament Scarf",
    price: 24.99,
    image: "/images/shop/scarf.jpg",
  },
  {
    id: 16,
    name: "Commemorative Pin Set",
    price: 19.99,
    image: "/images/shop/pins.jpg",
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-[#272727] p-4 rounded-lg shadow-lg">
    <Image
      src={product.image}
      alt={product.name}
      width={200}
      height={200}
      className="w-full h-48 object-cover mb-4 rounded"
    />
    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
    <p className="text-orange-500 font-bold">${product.price.toFixed(2)}</p>
    <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500">
      Add to Cart
    </Button>
  </div>
);

const ShopPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredBranded = brandedMerchandise.filter(
    (product) =>
      filter === "all" ||
      product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredTournament = tournamentMerchandise.filter(
    (product) =>
      filter === "all" ||
      product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Banner Image */}
      <div className="relative w-full h-40 sm:h-60 md:h-80 lg:h-96">
        <Image
          src="/images/shop-banner.jpg"
          alt="Champions Arena Shop"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Champions Arena Shop
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Filter products..."
            className="w-full p-2 rounded bg-[#333] text-white"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Branded Merchandise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBranded.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Tournament Merchandise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTournament.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopPage;
