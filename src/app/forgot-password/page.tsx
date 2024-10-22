import React from "react";
import ForgotPasswordPage from "@/components/ForgotPasswordPage";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function ForgotPasswordRoute() {
  return (
    <ErrorBoundary>
      <ForgotPasswordPage />
    </ErrorBoundary>
  );
}
