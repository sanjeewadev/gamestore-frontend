import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Asgardeo AuthProvider
import { AuthProvider } from "@asgardeo/auth-react";

// Create the configuration object
const config = {
  signInRedirectURL: "http://localhost:5173",
  signOutRedirectURL: "http://localhost:5173",
  clientID: "rNZsc63Wop7DLawkMflZlbvT8pIa",
  baseUrl: "https://api.asgardeo.io/t/sanjeewadev",
  scope: ["openid", "profile"],
};

createRoot(document.getElementById("root")).render(
  // Wrap it
  <AuthProvider config={config}>
    <App />
  </AuthProvider>,
);
