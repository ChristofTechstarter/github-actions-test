const {addieren, subtrahieren, multiplizieren, dividieren} = require("./math.js")
test("addiert 7 + 2, ergebnis soll 9 sein", () => {
    expect(addieren(7,2)).toBe(9)
})

test("addiert 7,2 soll NICHT 10 ergeben", () => {
    expect(addieren(7,2)).not.toBe(10)
})

test("subtrahiert 7,5, ergebniss soll 2 sein", () => {
    expect(subtrahieren(7,5)).toBe(2)
})

test("multipliziert 7,5, ergebniss soll 35 sein", () => {
    expect(multiplizieren(7,5)).toBe(35)
})

test("dividieren 10,2, ergebniss soll 5 sein", () => {
    expect(dividieren(10,2)).toBe(5)
})

test("dividieren durch 0 schmeißt einen Fehler", () => {
    expect(() => dividieren(5,0)).toThrow("Division durch 0 ist nicht erlaubt!")
})