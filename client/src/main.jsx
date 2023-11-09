import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      // VERCEL domain="dev-cgd2lhokv774aknw.uk.auth0.com"
      domain="dev-hcw0yxm63w57ez7b.uk.auth0.com"
      // VERCEL clientId="FzRY5Sno68pfs8JgaoMt9gnZde1n80fu"
      clientId="eV3xybo2tDnMtJS6zqCwvT263HtDIPOD"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
    <App />
    </Auth0Provider>,
  </React.StrictMode>
);
