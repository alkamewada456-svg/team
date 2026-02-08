import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "servicely:user";

const defaultUser = null;

const readStoredUser = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultUser;
  } catch (error) {
    console.error("Failed to read user from storage", error);
    return defaultUser;
  }
};

const storeUser = (user) => {
  if (!user) {
    window.localStorage.removeItem(STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

export const redirectPathForUser = (user) => {
  if (!user) {
    return "/login";
  }
  if (!user.is_onboarded) {
    return "/onboarding";
  }
  if (user.role === "agency") {
    return "/agency/dashboard";
  }
  if (user.role === "client") {
    return "/client/dashboard";
  }
  return "/login";
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    typeof window === "undefined" ? defaultUser : readStoredUser()
  );

  const updateUser = (nextUser) => {
    setUser(nextUser);
    if (typeof window !== "undefined") {
      storeUser(nextUser);
    }
  };

  const loginWithEmail = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }
    const nextUser = {
      id: "user_email",
      email,
      role: "agency",
      is_onboarded: true,
    };
    updateUser(nextUser);
    return nextUser;
  };

  const loginWithGoogle = async () => {
    const nextUser = {
      id: "user_google",
      email: "user@servicely.com",
      role: "agency",
      is_onboarded: true,
    };
    updateUser(nextUser);
    return nextUser;
  };

  const loginWithMicrosoft = async () => {
    const nextUser = {
      id: "user_microsoft",
      email: "user@servicely.com",
      role: "client",
      is_onboarded: false,
    };
    updateUser(nextUser);
    return nextUser;
  };

  const signup = async ({ email, password, role }) => {
    if (!email || !password || !role) {
      throw new Error("Email, password, and role are required.");
    }
    const nextUser = {
      id: "user_signup",
      email,
      role,
      is_onboarded: false,
    };
    updateUser(nextUser);
    return nextUser;
  };

  const logout = () => updateUser(null);

  const value = useMemo(
    () => ({
      user,
      loginWithEmail,
      loginWithGoogle,
      loginWithMicrosoft,
      signup,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
