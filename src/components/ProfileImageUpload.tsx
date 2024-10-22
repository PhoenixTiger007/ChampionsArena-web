import React, { useRef } from "react";
import { Button } from "@/components/ui/button";

interface ProfileImageUploadProps {
  onImageChange: (file: File | null) => void;
  onImageRemove: () => void;
}

export default function ProfileImageUpload({
  onImageChange,
  onImageRemove,
}: ProfileImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageChange(e.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      <input
        type="file"
        id="profileImage"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
      <Button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Change Image
      </Button>
      <Button
        type="button"
        onClick={onImageRemove}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Remove Image
      </Button>
    </div>
  );
}
