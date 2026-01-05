

// calculate total operating expenses
// requires income, property taxes, insurance, utilities 
export function calculateExpenses(rentalIncome, propTaxes, insurance, utilities) {
    let totalExpenses = 0;

    let maintenance = rentalIncome * 0.08;
    let vacancy = rentalIncome * 0.05;
    let capEx = rentalIncome * 0.05;
    let propManagement = rentalIncome * 0.10;

    totalExpenses += propTaxes + insurance + utilities + maintenance + vacancy + capEx + propManagement;

    return totalExpenses;
}

// calculate monthly mortgage payment
// requires purchase price, down payment, loan term, interest rate
export function calculateMortgage(purchasePrice, downPayment, loanTerm, interestRate) {
    let loanAmount = purchasePrice - downPayment;
    let monthlyRate = (interestRate / 100) / 12;
    let totalNumPayments = loanTerm * 12;

    let x = monthlyRate * (1 + monthlyRate) ** totalNumPayments;
    let y = ((1 + monthlyRate) ** totalNumPayments) - 1;
    let mortgagePayment = loanAmount * (x / y);

    return mortgagePayment;
}

// calculate NOI
// requires monthly rental income, monthly operating expenses
export function calculateNOI(monthlyRentalIncome, monthlyOperatingExpenses) {
    let annualRentalIncome = monthlyRentalIncome * 12;
    let annualOperatingExpenses = monthlyOperatingExpenses * 12;

    return annualRentalIncome - annualOperatingExpenses;
}

// calculate cap rate
// requires NOI, purchase price
export function calculateCapRate(noi, purchasePrice) {
    return noi / purchasePrice;
}

// calculate monthly cash flow
// requires monthly rental income, monthly operating expenses, monthly mortgage payment
export function calculateCashFlow(monthlyRentalIncome, monthlyOperatingExpenses, monthlyMortgage) {
    return monthlyRentalIncome - monthlyOperatingExpenses - monthlyMortgage;
}


// calculate cash on cash return
// requires cash flow, down payment, closing costs, rehab budget
export function calculateCocReturn(cashFlow, downPayment, closingCosts, rehabBudget) {
    let totalCashInvestment = downPayment + closingCosts + rehabBudget;
    let annualCashFlow = cashFlow * 12;


    return annualCashFlow / totalCashInvestment;
}