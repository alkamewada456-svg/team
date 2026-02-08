import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, redirectPathForUser, useAuth } from "./auth/AuthContext.jsx";
import AgencyDashboard from "./pages/AgencyDashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProjectsView from "./pages/ProjectsView.jsx";
import ServiceMarketplace from "./pages/ServiceMarketplace.jsx";
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

const RoleRoute = ({ role, children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!user.is_onboarded) {
    return <Navigate to="/onboarding" replace />;
  }
  if (user.role !== role) {
    return <Navigate to={redirectPathForUser(user)} replace />;
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
        <RoleRoute role="agency">
          <AgencyDashboard />
        </RoleRoute>
      }
    />
    <Route
      path="/client/dashboard"
      element={
        <RoleRoute role="client">
          <Placeholder
            title="Client Dashboard"
            subtitle="Client-specific dashboard placeholder."
          />
        </RoleRoute>
      }
    />
    <Route
      path="/services"
      element={
        <ProtectedRoute>
          <ServiceMarketplace />
        </ProtectedRoute>
      }
    />
    <Route
      path="/projects"
      element={
        <ProtectedRoute>
          <ProjectsView />
        </ProtectedRoute>
      }
    />
    <Route
      path="/projects/new"
      element={
        <ProtectedRoute>
          <Placeholder
            title="New Project"
            subtitle="Start a new project with an agency."
          />
        </ProtectedRoute>
      }
    />
    <Route
      path="/projects/:id"
      element={
        <ProtectedRoute>
          <Placeholder
            title="Project Details"
            subtitle="Project milestone and deliverables view."
          />
        </ProtectedRoute>
      }
    />
    <Route
      path="/agency/services"
      element={
        <RoleRoute role="agency">
          <Placeholder title="Services" subtitle="Agency services list placeholder." />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/services/new"
      element={
        <RoleRoute role="agency">
          <Placeholder
            title="Create Service"
            subtitle="Build a service package for clients."
          />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/jobs"
      element={
        <RoleRoute role="agency">
          <Placeholder
            title="Freelance Jobs"
            subtitle="Manage agency freelance job posts."
          />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/jobs/new"
      element={
        <RoleRoute role="agency">
          <Placeholder
            title="Post Freelance Job"
            subtitle="Create a new freelance job post."
          />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/team"
      element={
        <RoleRoute role="agency">
          <Placeholder title="Team" subtitle="Manage agency team members." />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/profile"
      element={
        <RoleRoute role="agency">
          <Placeholder title="Agency Profile" subtitle="Agency profile placeholder." />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/analytics"
      element={
        <RoleRoute role="agency">
          <Placeholder title="Analytics" subtitle="Agency analytics placeholder." />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/earnings"
      element={
        <RoleRoute role="agency">
          <Placeholder title="Earnings" subtitle="Agency earnings placeholder." />
        </RoleRoute>
      }
    />
    <Route
      path="/messages"
      element={
        <ProtectedRoute>
          <Placeholder title="Messages" subtitle="Unified messaging placeholder." />
        </ProtectedRoute>
      }
    />
    <Route
      path="/orders"
      element={
        <ProtectedRoute>
          <Placeholder title="Orders" subtitle="Orders list placeholder." />
        </ProtectedRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <ProtectedRoute>
          <Placeholder title="Settings" subtitle="Settings placeholder." />
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
