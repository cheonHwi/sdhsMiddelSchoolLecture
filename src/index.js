import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import GoogleHeader from "./google/header";
import GoogleSection from "./google/section";
import GoogleFooter from "./google/footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GoogleHeader />
    <GoogleSection />
    <GoogleFooter />
  </>
);

reportWebVitals();
