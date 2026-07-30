import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* path ->"./"
 import <AnyName:Default Export> from "Path"
  import js or jsx files. The extension is optional
   */
import AmazonPage from "./AmazonPage/index.jsx";


import "./index.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AmazonPage />
  </StrictMode>,
  );