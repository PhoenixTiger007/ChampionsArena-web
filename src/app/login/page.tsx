import React from "react";
import LoginPage from "@/components/LoginPage";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function LoginRoute() {
  return (
    <ErrorBoundary>
      <LoginPage />
    </ErrorBoundary>
  );
}
