export default function convert(rates, amount, fromCy, toCy) {
  if (fromCy === toCy) return amount;
  return amount * rates[fromCy][toCy];
}
