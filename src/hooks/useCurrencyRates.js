import { useEffect, useState } from "react";

export default function useCurrencyRates() {
  const [rates, setRates] = useState({
    UAH: {
      USD: 0,
      EUR: 0,
    },
    USD: {
      UAH: 0,
      EUR: 0,
    },
    EUR: {
      UAH: 0,
      USD: 0,
    },
  });

  useEffect(() => {
    fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
      .then((result) => result.json())
      .then((results) => {
        const USD_UAH = Number(results.find((item) => item.ccy === "USD").buy);
        const EUR_UAH = Number(results.find((item) => item.ccy === "EUR").buy);

        const UAH = {
          USD: 1 / USD_UAH,
          EUR: 1 / EUR_UAH,
        };

        const USD = {
          UAH: USD_UAH,
          EUR: USD_UAH * UAH.EUR,
        };

        const EUR = {
          UAH: EUR_UAH,
          USD: EUR_UAH * UAH.USD,
        };

        setRates({
          UAH,
          USD,
          EUR,
        });
      });
  }, []);

  return rates;
}
