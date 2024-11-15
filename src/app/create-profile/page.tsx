import React, { Suspense } from "react";
import ProfileCreationPage from "@/components/ProfileCreationPage";

export default function CreateProfileRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileCreationPage />
    </Suspense>
  );
}