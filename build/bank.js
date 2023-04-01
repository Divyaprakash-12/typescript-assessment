"use strict";
class Customer {
    AccessDetails(name, age, address, contactNumber) {
        this.CustomerName = name;
        this.Age = age;
        this.Address = address;
        this.ContactNumber = contactNumber;
    }
}
class Loan extends Customer {
    constructor(accountNo, loanType, loanAmount, duration, interestRate, name, age, address, contactNumber) {
        super();
        this.LoanAccountNo = accountNo;
        this.LoanType = loanType;
        this.LoanAmount = loanAmount;
        this.Duration = duration;
        this.InterestRate = interestRate;
        super.AccessDetails(name, age, address, contactNumber);
    }
    AccessDetails(accountNo, loanType, loanAmount, duration, interestRate, name, age, address, contactNumber) {
        this.LoanAccountNo = accountNo;
        this.LoanType = loanType;
        this.LoanAmount = loanAmount;
        this.Duration = duration;
        this.InterestRate = interestRate;
        super.AccessDetails(name, age, address, contactNumber);
    }
    InterestCalculate() {
        const interestAmount = (this.LoanAmount * this.Duration * this.InterestRate) / 100;
        const totalAmount = this.LoanAmount + interestAmount;
        return totalAmount;
    }
    Display() {
        console.log("Customer Details:");
        console.log(`Name: ${this.CustomerName}`);
        console.log(`Age: ${this.Age}`);
        console.log(`Address: ${this.Address}`);
        console.log(`Contact Number: ${this.ContactNumber}`);
        console.log("Loan Details:");
        console.log(`Account Number: ${this.LoanAccountNo}`);
        console.log(`Loan Type: ${this.LoanType}`);
        console.log(`Loan Amount: ${this.LoanAmount}`);
        console.log(`Duration: ${this.Duration}`);
        console.log(`Interest Rate: ${this.InterestRate}`);
        console.log("Interest Details:");
        console.log(`Interest Amount: ${((this.LoanAmount * this.Duration * this.InterestRate) /
            100).toFixed(2)}`);
        console.log(`Total Amount to be Paid: ${this.InterestCalculate().toFixed(2)}`);
    }
}
// Create an object and test the implementation
const loan = new Loan("LN123456", "Personal Loan", 50000, 12, 10, "John", 30, "123 Main St", "555-1234");
loan.Display();
