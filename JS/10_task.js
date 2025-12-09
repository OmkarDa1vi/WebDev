// Create a Function called calculateLoanDetails and pass values like loan amount, annual rate, years and 
// calculate monthly payment (EMI), Total Payment, Total Interest Paid.
// Amortization Formula: (M=P[i(1+i)^{n}]/[(1+i)^{n}–1]\) 
// Where: M: Monthly Payment P: Principal Loan Amount i: Monthly Interest Rate (Annual interest rate / 12 / 100) 
// n: Total Number of Payments (Loan term in years * 12)

function calculateLoanDetails(loanAmount, annualRate, years) {
    const monthlyRate = annualRate / 12 / 100;
    const totalPayments = years * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterestPaid = totalPayment - loanAmount;
    return {
        monthlyPayment: monthlyPayment,
        totalPayment: totalPayment,
        totalInterestPaid: totalInterestPaid
    };  
}

// Example usage:
const loanDetails = calculateLoanDetails(100000, 5, 20);
console.log("Monthly Payment (EMI):", loanDetails.monthlyPayment.toFixed(2));
console.log("Total Payment:", loanDetails.totalPayment.toFixed(2));
console.log("Total Interest Paid:", loanDetails.totalInterestPaid.toFixed(2));
