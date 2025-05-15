// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ColorContextExample from "./pages/ColorContextExample.tsx";
import ButtonContextsExample from "./pages/ToggleButtonContextsExample.tsx";
import ContextsWithCustomHooks from "./pages/ContextsWithCustomHooks.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/color-context" element={<ColorContextExample />} />
      <Route
        path="/toggle-button-contexts"
        element={<ButtonContextsExample />}
      />
      <Route
        path="/contexts-with-custom-hooks"
        element={<ContextsWithCustomHooks />}
      />
    </Routes>
  </BrowserRouter>
  // </StrictMode>,
);
