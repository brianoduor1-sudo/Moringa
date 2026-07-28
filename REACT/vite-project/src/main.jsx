import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>This is my React app</h1>
  </StrictMode>,
)
/*
 React Intro to Components
*/

// 1. Component that returns null
function MyComponent() {
  return null;
}

// 2. Component that returns valid HTML
function MyComponent2() {
  return (
    <div>
      <h1>fav text</h1>
    </div>
  );
}

// 3. Component using a React Fragment
function MyComponent3() {
  return (
    <>
      <div>First div</div>
      <div>Second div</div>
    </>
  );
}

export default function App() {
  return (
    <>
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
    </>
  );
}import React from "react";
import ReactDOM from "react-dom/client";
import ParentComponent from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);