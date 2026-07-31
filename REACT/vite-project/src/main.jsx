import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* path ->"./"
 import <AnyName:Default Export> from "Path"
  import js or jsx files. The extension is optional
   */
import Props from "./Props";

import "./index.css";
import Mapping from "./Mapping";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mapping />
  </StrictMode>,
);
