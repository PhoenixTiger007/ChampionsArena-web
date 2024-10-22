import React from "react";
import ProfilePage from "@/components/ProfilePage";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function ProfileRoute() {
  return (
    <ErrorBoundary>
      <ProfilePage />
    </ErrorBoundary>
  );
}
