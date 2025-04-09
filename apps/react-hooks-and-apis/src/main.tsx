// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import UseMemoExample from "./pages/memoization/useMemoExample.tsx";
import Header from "./components/header.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/memoization/useMemoExample" element={<UseMemoExample />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
