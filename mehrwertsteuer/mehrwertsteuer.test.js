const { mwst, brutto } = require("./mehrwertsteuer.js");

test("Berechnet die Mehrwertsteuer für 50€ bei 19% Steuersatz, Ergebnis soll 9.5€ sein!", () => {
  expect(mwst(50)).toBe(9.5);
});

test("Berechnet die Mehrwertsteuer für 1.000.000€ bei 19% Steuersatz, Ergebnis soll 190.000€ sein!", () => {
  expect(mwst(1000000)).toBe(190000);
});

test("Berechnet die Mehrwertsteuer für 50€ bei 7% Steuersatz, Ergebnis soll 3.5€ sein!", () => {
  expect(mwst(50, 0.07)).toBe(3.5);
});

test("Berechnet die Mehrwertsteuer für 0€ bei 19% Steuersatz, soll 0€ sein!", () => {
  expect(mwst(0)).toBe(0);
});

test("Berechnet den Bruttobetrag (Netto + Steuer) für 50€, Ergebnis soll 59.5€ sein!", () => {
  expect(brutto(50)).toBe(59.5);
});

test("Berechnet den Bruttobetrag (Netto + Steuer) für 1.000.000€, Ergebnis soll 1.190.000€ sein!", () => {
  expect(brutto(1000000)).toBe(1190000);
});

test("Berechnet den Bruttobetrag (Netto + Steuer) für 50€ bei 7%, Ergebnis soll 53,5€ sein!", () => {
  expect(brutto(50, 0.07)).toBe(53.5);
});
