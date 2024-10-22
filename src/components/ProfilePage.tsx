"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth, db, storage } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UserProfile {
  fullName: string;
  nickname: string;
  email: string;
  phone: string;
  profileImageUrl?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile | null>(null);
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push("/login");
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const profileData = docSnap.data() as UserProfile;
          setProfile(profileData);
          setEditedProfile(profileData);
        } else {
          setError("Profile not found. Please create your profile.");
          router.push("/create-profile");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("An error occurred while fetching your profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !auth.currentUser) return;

    try {
      const storageRef = ref(storage, `profile_images/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);

      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userDocRef, { profileImageUrl: imageUrl }, { merge: true });

      setProfile((prevProfile) =>
        prevProfile ? { ...prevProfile, profileImageUrl: imageUrl } : null
      );
      setEditedProfile((prevProfile) =>
        prevProfile ? { ...prevProfile, profileImageUrl: imageUrl } : null
      );
    } catch (err) {
      console.error("Error updating profile image:", err);
      setError("Failed to update profile image. Please try again.");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!auth.currentUser || !editedProfile) return;

    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userDocRef, editedProfile, { merge: true });
      setProfile(editedProfile);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    }
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleChangeEmail = async () => {
    if (!auth.currentUser) return;

    try {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email!,
        password
      );
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updateEmail(auth.currentUser, newEmail);

      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userDocRef, { email: newEmail }, { merge: true });

      setProfile((prevProfile) =>
        prevProfile ? { ...prevProfile, email: newEmail } : null
      );
      setEditedProfile((prevProfile) =>
        prevProfile ? { ...prevProfile, email: newEmail } : null
      );
      setIsChangingEmail(false);
      setNewEmail("");
      setPassword("");
      setError("Email updated successfully");
    } catch (err) {
      console.error("Error updating email:", err);
      setError(
        "Failed to update email. Please check your password and try again."
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!profile || !editedProfile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Profile</h1>
        <div className="bg-[#272727] shadow rounded-lg p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={profile.profileImageUrl || "/default-avatar.png"}
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
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                Edit
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-24 font-bold">Name:</span>
              {isEditing ? (
                <Input
                  name="fullName"
                  value={editedProfile.fullName}
                  onChange={handleChange}
                  className="flex-grow ml-2 text-black"
                />
              ) : (
                profile.fullName
              )}
            </div>
            <div className="flex items-center">
              <span className="w-24 font-bold">Nickname:</span>
              {isEditing ? (
                <Input
                  name="nickname"
                  value={editedProfile.nickname}
                  onChange={handleChange}
                  className="flex-grow ml-2 text-black"
                />
              ) : (
                profile.nickname
              )}
            </div>
            <div className="flex items-center">
              <span className="w-24 font-bold">Email:</span>
              <span className="flex-grow">{profile.email}</span>
            </div>
            {isChangingEmail && (
              <div className="space-y-2 ml-24">
                <Input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="New Email"
                  className="text-black"
                />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Current Password"
                  className="text-black"
                />
                <div className="flex space-x-2">
                  <Button
                    onClick={handleChangeEmail}
                    className="bg-green-600 hover:bg-green-700">
                    Confirm
                  </Button>
                  <Button
                    onClick={() => setIsChangingEmail(false)}
                    className="bg-gray-600 hover:bg-gray-700">
                    Cancel
                  </Button>
                </div>
              </div>
            )}
            <div className="flex items-center">
              <span className="w-24 font-bold">Phone:</span>
              {isEditing ? (
                <Input
                  name="phone"
                  value={editedProfile.phone}
                  onChange={handleChange}
                  className="flex-grow ml-2 text-black"
                />
              ) : (
                profile.phone
              )}
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-2">
            {isEditing ? (
              <>
                <Button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700">
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  className="bg-gray-600 hover:bg-gray-700">
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleEdit}
                  className="bg-blue-600 hover:bg-blue-700">
                  Edit Profile
                </Button>
                <Button
                  onClick={() => setIsChangingEmail(true)}
                  className="bg-yellow-600 hover:bg-yellow-700">
                  Edit Email
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
