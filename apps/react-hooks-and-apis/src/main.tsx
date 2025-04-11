// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactMemoExample from "./pages/memoization/ReactMemoExample.tsx";
import Header from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/memoization/react-memo-example"
        element={<ReactMemoExample />}
      />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
