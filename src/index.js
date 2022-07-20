import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SamsungHeader from "./samsung/header";
import SamsungFooter from "./samsung/footer";
import SamsungSection from "./samsung/section";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <SamsungHeader />
    <SamsungSection />
    <SamsungFooter />
  </>
);

reportWebVitals();
