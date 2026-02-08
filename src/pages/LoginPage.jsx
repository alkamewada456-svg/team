import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { redirectPathForUser, useAuth } from "../auth/AuthContext.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, loginWithEmail, loginWithGoogle, loginWithMicrosoft } = useAuth();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectTarget = useMemo(() => redirectPathForUser(user), [user]);

  useEffect(() => {
    if (user) {
      navigate(redirectTarget, { replace: true });
    }
  }, [user, redirectTarget, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const nextUser = await loginWithEmail(formState);
      navigate(redirectPathForUser(nextUser), { replace: true });
    } catch (err) {
      setError(err.message || "Unable to sign in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOAuth = async (provider) => {
    setError("");
    setIsSubmitting(true);
    try {
      const nextUser =
        provider === "google" ? await loginWithGoogle() : await loginWithMicrosoft();
      navigate(redirectPathForUser(nextUser), { replace: true });
    } catch (err) {
      setError(err.message || "Unable to sign in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page login">
      <header className="nav">
        <div className="logo">servicely</div>
        <div className="nav-actions">
          <button className="lang-button" type="button">
            EN <span aria-hidden>▾</span>
          </button>
          <Link className="ghost-button" to="/signup">
            Join
          </Link>
        </div>
      </header>
      <main className="login-layout">
        <section className="login-value">
          <div className="value-card">
            <h1>Agencies grow faster on Servicely</h1>
            <ul>
              <li>Verified service agencies</li>
              <li>Dedicated agency dashboards</li>
              <li>Long-term clients, not one-off gigs</li>
            </ul>
            <div className="value-visual">
              <div className="value-image" />
              <div className="value-overlay">
                <p>Trusted by 3,200+ agencies worldwide</p>
                <span>Average 42% growth in first 90 days</span>
              </div>
            </div>
          </div>
        </section>
        <section className="login-card">
          <div className="card fade-in">
            <h2>Sign in to your account</h2>
            <p>
              Don&apos;t have an account? <Link to="/signup">Join here</Link>
            </p>
            <button
              className="provider-button"
              type="button"
              onClick={() => handleOAuth("google")}
              disabled={isSubmitting}
            >
              <span className="icon-circle google" aria-hidden />
              Continue with Google
            </button>
            <button
              className="provider-button microsoft"
              type="button"
              onClick={() => handleOAuth("microsoft")}
              disabled={isSubmitting}
            >
              <span className="icon-circle" aria-hidden />
              Continue with Microsoft
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <form onSubmit={handleEmailLogin} className="login-form">
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="form-meta">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
              {error ? <p className="error">{error}</p> : null}
              <button className="primary-button" type="submit" disabled={isSubmitting}>
                Email login
              </button>
            </form>
            <p className="legal">
              By signing in, you agree to our <a href="#">Terms of Service</a> and
              <a href="#"> Privacy Policy</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
