"use strict";
class customer {
    constructor(cus_name, cus_age, cus_address, cus_ph_no) {
        this.cus_name = cus_name;
        this.cus_age = cus_age;
        this.cus_address = cus_address;
        this.cus_ph_no = cus_ph_no;
    }
}
class Loan extends customer {
    constructor(cus_name, cus_age, cus_address, cus_ph_no, loan_ac_no, loan_type, loan_amount, loan_duration, loan_intrest_rate) {
        super(cus_name, cus_age, cus_address, cus_ph_no);
        this.loan_ac_no = loan_ac_no;
        this.loan_type = loan_type;
        this.loan_amount = loan_amount;
        this.loan_duration = loan_duration;
        this.loan_intrest_rate = loan_intrest_rate;
    }
    InterestCalculate() {
        const interestAmount = (this.loan_amount * this.loan_duration * this.loan_intrest_rate) / 100;
        const totalAmount = this.loan_amount + interestAmount;
        return totalAmount;
    }
    display() {
        console.log("Customer Details:");
        console.log(`Name: ${this.cus_name}`);
        console.log(`Age: ${this.cus_age}`);
        console.log(`Address: ${this.cus_address}`);
        console.log(`Phone Number: ${this.cus_ph_no}`);
        console.log("Loan Details:");
        console.log(`Account Number: ${this.loan_ac_no}`);
        console.log(`Loan Type: ${this.loan_type}`);
        console.log(`Loan Amount: ${this.loan_amount}`);
        console.log(`Duration: ${this.loan_duration}`);
        console.log(`intrest rate: ${this.loan_intrest_rate}`);
        console.log(`Interest Amount: ${((this.loan_amount * this.loan_duration * this.loan_intrest_rate) / 100)}`);
        console.log(`Total Amount to be Paid: ${this.InterestCalculate().toFixed(2)}`);
        obj.InterestCalculate();
    }
}
let obj = new Loan("hari", 22, "RS puram", 9074858906, "ln12345", "personal", 70000, 24, 10);
obj.display();
