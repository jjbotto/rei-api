import * as math from "../src/utils/math.js";

test("Testing calculateMortgage", () => {
    const payment  = math.calculateMortgage(400000, 80000, 30, 6);
    expect(payment).toBeCloseTo(1918.56, 2);
});

// 100 + 50 + 50 + 80 + 50 + 50 + 100
test("Testing calculateExpenses", () => {
    const expenses = math.calculateExpenses(1000, 100, 50, 50);
    expect(expenses).toBe(480);
});

test("Testing calculateNOI", () => {
    const noi = math.calculateNOI(1000, 460);
    expect(noi).toBe(6480);
});

test("Testing calculateCapRate", () => {
    const capRate = math.calculateCapRate(6480, 100000);
    expect(capRate).toBe(0.0648);
});

test("Testing calculateCashFlow", () => {
    const cashFlow = math.calculateCashFlow(1000, 460, 455);
    expect(cashFlow).toBe(85);
});

test("Testing calculateCocReturn", () => {
    const cocReturn = math.calculateCocReturn(85, 20000, 3000, 5000);
    expect(cocReturn).toBeCloseTo(0.036, 2);
})

