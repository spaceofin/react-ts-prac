// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactMemoExample from "./pages/memoization/ReactMemoExample.tsx";
import Header from "./components/Header.tsx";
import UseMemoExample from "./pages/memoization/UseMemoExample.tsx";

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
      <Route
        path="/memoization/use-memo-example"
        element={<UseMemoExample />}
      />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
