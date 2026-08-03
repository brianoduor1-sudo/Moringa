import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AmazonPage2 from "./AmazonPage2.0";
import Mapping from "./Mapping";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AmazonPage2 />
    <Mapping />
  </StrictMode>,
);
