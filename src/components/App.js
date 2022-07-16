import React from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import useCurrencyRates from "../hooks/useCurrencyRates";

export default function App() {
  const rates = useCurrencyRates();

  return (
    <div>
      <Header rates={rates} />
      <Main rates={rates} />
    </div>
  );
}
