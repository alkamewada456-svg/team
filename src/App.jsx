import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, redirectPathForUser, useAuth } from "./auth/AuthContext.jsx";
import AgencyDashboard from "./pages/AgencyDashboard.jsx";
import AgencyJobCreatePage from "./pages/AgencyJobCreatePage.jsx";
import AgencyJobsPage from "./pages/AgencyJobsPage.jsx";
import AgencyProfile from "./pages/AgencyProfile.jsx";
import AgencyServiceCreatePage from "./pages/AgencyServiceCreatePage.jsx";
import AgencyServicesPage from "./pages/AgencyServicesPage.jsx";
import AnalyticsPage from "./pages/AnalyticsPage.jsx";
import EarningsPage from "./pages/EarningsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MessagesInbox from "./pages/MessagesInbox.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import ProjectCreatePage from "./pages/ProjectCreatePage.jsx";
import ProjectsView from "./pages/ProjectsView.jsx";
import ServiceMarketplace from "./pages/ServiceMarketplace.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
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

const MultiRoleRoute = ({ roles, children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!user.is_onboarded) {
    return <Navigate to="/onboarding" replace />;
  }
  if (!roles.includes(user.role)) {
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
      path="/freelancer/dashboard"
      element={
        <RoleRoute role="freelancer">
          <Placeholder
            title="Freelancer Dashboard"
            subtitle="Freelancer dashboard placeholder."
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
        <MultiRoleRoute roles={["agency", "client"]}>
          <ProjectsView />
        </MultiRoleRoute>
      }
    />
    <Route
      path="/projects/new"
      element={
        <MultiRoleRoute roles={["agency", "client"]}>
          <ProjectCreatePage />
        </MultiRoleRoute>
      }
    />
    <Route
      path="/projects/:id"
      element={
        <MultiRoleRoute roles={["agency", "client"]}>
          <Placeholder
            title="Project Details"
            subtitle="Project milestone and deliverables view."
          />
        </MultiRoleRoute>
      }
    />
    <Route
      path="/agency/services"
      element={
        <RoleRoute role="agency">
          <AgencyServicesPage />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/services/new"
      element={
        <RoleRoute role="agency">
          <AgencyServiceCreatePage />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/jobs"
      element={
        <RoleRoute role="agency">
          <AgencyJobsPage />
        </RoleRoute>
      }
    />
    <Route
      path="/agency/jobs/new"
      element={
        <RoleRoute role="agency">
          <AgencyJobCreatePage />
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
          <AgencyProfile />
        </RoleRoute>
      }
    />
    <Route
      path="/analytics"
      element={
        <RoleRoute role="agency">
          <AnalyticsPage />
        </RoleRoute>
      }
    />
    <Route
      path="/earnings"
      element={
        <RoleRoute role="agency">
          <EarningsPage />
        </RoleRoute>
      }
    />
    <Route
      path="/messages"
      element={
        <ProtectedRoute>
          <MessagesInbox />
        </ProtectedRoute>
      }
    />
    <Route
      path="/orders"
      element={
        <MultiRoleRoute roles={["agency", "client"]}>
          <OrdersPage />
        </MultiRoleRoute>
      }
    />
    <Route
      path="/settings"
      element={
        <ProtectedRoute>
          <SettingsPage />
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
