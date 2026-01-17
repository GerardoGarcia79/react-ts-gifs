import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MyCounterApp } from "./counter/MyCounterApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <GifsApp /> */}
    <MyCounterApp />
  </StrictMode>,
);
