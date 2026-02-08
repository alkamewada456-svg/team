import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { redirectPathForUser, useAuth } from "../auth/AuthContext.jsx";

const SignupPage = () => {
  const navigate = useNavigate();
  const { user, signup } = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    role: "agency",
  });
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

  const handleSignup = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const nextUser = await signup(formState);
      navigate(redirectPathForUser(nextUser), { replace: true });
    } catch (err) {
      setError(err.message || "Unable to create account.");
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
          <Link className="ghost-button" to="/login">
            Sign in
          </Link>
        </div>
      </header>
      <main className="login-layout">
        <section className="login-value">
          <div className="value-card">
            <h1>Join Servicely and start winning better clients</h1>
            <ul>
              <li>Access vetted client requests</li>
              <li>Instantly launch your agency profile</li>
              <li>Stay in control of onboarding</li>
            </ul>
            <div className="value-visual">
              <div className="value-image alt" />
              <div className="value-overlay">
                <p>Top agencies earn $18k/month on average</p>
                <span>Clients matched in under 48 hours</span>
              </div>
            </div>
          </div>
        </section>
        <section className="login-card">
          <div className="card fade-in">
            <h2>Create your Servicely account</h2>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
            <form onSubmit={handleSignup} className="login-form">
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  placeholder="you@agency.com"
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
                  placeholder="Create a password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                I am joining as
                <select name="role" value={formState.role} onChange={handleChange}>
                  <option value="agency">Agency</option>
                  <option value="client">Client</option>
                </select>
              </label>
              {error ? <p className="error">{error}</p> : null}
              <button className="primary-button" type="submit" disabled={isSubmitting}>
                Create account
              </button>
            </form>
            <p className="legal">
              By creating an account, you agree to our <a href="#">Terms</a> and
              <a href="#"> Privacy Policy</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignupPage;
