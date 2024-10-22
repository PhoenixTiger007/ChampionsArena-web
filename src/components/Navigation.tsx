"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";

export default function Navigation() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="bg-[#1C1C1C] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fe8c00] to-[#f83600]">
            Champions Arena
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/tournaments" className="text-white hover:text-gray-300">
            Tournaments
          </Link>
          <Link href="/shop" className="text-white hover:text-gray-300">
            Shop
          </Link>
          {user ? (
            <>
              <Link href="/profile">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black">
                  Profile
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
