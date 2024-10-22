import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  price: string;
  image: string;
}

export default function EcommerceSection() {
  const officialProducts: Product[] = [
    {
      name: "Official Tournament Basketball",
      price: "$59.99",
      image: "/images/product-placeholder.jpg",
    },
    {
      name: "Pro Soccer Ball",
      price: "$49.99",
      image: "/images/product-placeholder.jpg",
    },
    {
      name: "Champions Arena Jersey",
      price: "$39.99",
      image: "/images/product-placeholder.jpg",
    },
    {
      name: "Tournament Hoodie",
      price: "$54.99",
      image: "/images/product-placeholder.jpg",
    },
  ];

  const tournamentProducts: Product[] = [
    {
      name: "Tournament T-Shirt",
      price: "$29.99",
      image: "/images/product-placeholder.jpg",
    },
    {
      name: "Champions Arena Cap",
      price: "$24.99",
      image: "/images/product-placeholder.jpg",
    },
    {
      name: "Commemorative Medal",
      price: "$19.99",
      image: "/images/product-placeholder.jpg",
    },
    {
      name: "Event Poster",
      price: "$14.99",
      image: "/images/product-placeholder.jpg",
    },
  ];

  const ProductGrid = ({ products }: { products: Product[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-[#272727] rounded-lg overflow-hidden shadow-lg animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{ animationDelay: `${index * 0.2}s` }}>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white mb-2">
              {product.name}
            </h3>
            <p className="text-orange-500 font-bold mb-4">{product.price}</p>
            <Button className="w-full bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
          Official Merchandise
        </h2>
        <ProductGrid products={officialProducts} />

        <h2 className="text-3xl font-bold text-center text-white my-12 animate-fade-in-up">
          Tournament Merchandise
        </h2>
        <ProductGrid products={tournamentProducts} />
      </div>
    </section>
  );
}
