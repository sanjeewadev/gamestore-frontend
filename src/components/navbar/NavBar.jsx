import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import "./NavBar.css";

export default function NavBar() {
  const { state, signIn, signOut, getBasicUserInfo } = useAuthContext();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (state.isAuthenticated) {
      getBasicUserInfo()
        .then((response) => setUserInfo(response))
        .catch((error) => console.error(error));
    }
  }, [state.isAuthenticated, getBasicUserInfo]);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        GameStore
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Store
        </Link>
        <Link to="/admin" className="nav-link">
          Admin
        </Link>

        <div className="auth-section">
          {state.isAuthenticated ? (
            <>
              <span className="user-greeting">
                Welcome, {userInfo?.username || "Player"}
              </span>
              <button
                className="nav-btn nav-btn-logout"
                onClick={() => signOut()}>
                Log Out
              </button>
            </>
          ) : (
            <button className="nav-btn nav-btn-login" onClick={() => signIn()}>
              Secure Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
