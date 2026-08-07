import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GitHubProject from "./GitHubProject/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubProject />
  </StrictMode>,
);
