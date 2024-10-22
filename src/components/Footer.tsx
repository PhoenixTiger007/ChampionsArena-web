import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Champions Arena</h3>
            <p>
              Your ultimate destination for sports tournaments and merchandise.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <Link href="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:text-orange-500">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-orange-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: info@championsarena.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Champions Arena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
