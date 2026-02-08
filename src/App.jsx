import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, redirectPathForUser, useAuth } from "./auth/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const Placeholder = ({ title, subtitle }) => (
  <div className="page placeholder">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!user.is_onboarded) {
    return <Navigate to="/onboarding" replace />;
  }
  return children;
};

const RootRedirect = () => {
  const { user } = useAuth();
  return <Navigate to={redirectPathForUser(user)} replace />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<RootRedirect />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route
      path="/onboarding"
      element={
        <Placeholder
          title="Onboarding"
          subtitle="Complete onboarding to unlock your Servicely dashboard."
        />
      }
    />
    <Route
      path="/forgot-password"
      element={
        <Placeholder
          title="Forgot Password"
          subtitle="Password reset flow will live here."
        />
      }
    />
    <Route
      path="/agency/dashboard"
      element={
        <ProtectedRoute>
          <Placeholder
            title="Agency Dashboard"
            subtitle="Agency-specific dashboard placeholder."
          />
        </ProtectedRoute>
      }
    />
    <Route
      path="/client/dashboard"
      element={
        <ProtectedRoute>
          <Placeholder
            title="Client Dashboard"
            subtitle="Client-specific dashboard placeholder."
          />
        </ProtectedRoute>
      }
    />
    <Route
      path="*"
      element={<Navigate to="/login" replace />}
    />
  </Routes>
);

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default App;
