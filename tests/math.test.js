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