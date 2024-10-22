import React from "react";
import RegisterPage from "@/components/RegisterPage";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function RegisterRoute() {
  return (
    <ErrorBoundary>
      <RegisterPage />
    </ErrorBoundary>
  );
}
