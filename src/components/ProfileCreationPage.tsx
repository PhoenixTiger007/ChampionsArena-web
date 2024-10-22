"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth, db, storage } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface UserProfile {
  fullName: string;
  nickname: string;
  email: string;
  phone: string;
  profileImageUrl?: string;
}

export default function ProfileCreationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<UserProfile>({
    fullName: "",
    nickname: "",
    email: "",
    phone: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push("/login");
    } else {
      setFormData((prevState) => ({
        ...prevState,
        email: user.email || "",
      }));
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const user = auth.currentUser;
    if (!user) {
      setError("No authenticated user found");
      setLoading(false);
      return;
    }

    try {
      let imageUrl = "";
      if (profileImage) {
        const storageRef = ref(storage, `profile_images/${user.uid}`);
        await uploadBytes(storageRef, profileImage);
        imageUrl = await getDownloadURL(storageRef);
      }

      await setDoc(doc(db, "users", user.uid), {
        ...formData,
        profileImageUrl: imageUrl,
      });

      console.log("Profile created successfully");
      router.push("/profile");
    } catch (err) {
      console.error("Error creating profile:", err);
      setError("Failed to create profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Create Your Profile
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#272727] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={previewImage || "/default-avatar.png"}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                  Edit
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white">
                Full Name
              </label>
              <div className="mt-1">
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-white">
                Nickname
              </label>
              <div className="mt-1">
                <Input
                  id="nickname"
                  name="nickname"
                  type="text"
                  required
                  value={formData.nickname}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white">
                Phone
              </label>
              <div className="mt-1">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-black"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                {loading ? "Creating Profile..." : "Create Profile"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
