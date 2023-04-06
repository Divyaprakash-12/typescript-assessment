interface ISavingAccount {
    Ac_Id: number;
    Ac_Type: string;
    Deposit_Amt: number;
    Withdraw_Amt: number;
    Balence(type: string): void;
}
interface ICurrentAccount {
    Ac_Id: number;
    Ac_Type: string;
    Deposit_Amt: number;
    Withdraw_Amt: number;
    Balence(type: string): void;
}
class Account implements ISavingAccount, ICurrentAccount {
    Ac_Id: number;
    Ac_Type: string;
    Deposit_Amt: number;
    Withdraw_Amt: number;
    constructor(Ac_Id: number, Ac_Type: string, Deposit_Amt: number, Withdraw_Amt: number) {
        this.Ac_Id = Ac_Id;
        this.Ac_Type = Ac_Type;
        this.Deposit_Amt = Deposit_Amt;
        this.Withdraw_Amt = Withdraw_Amt;
    }
    Balence(type: string): void {
        if ( type== "Current Account") {
            console.log(`Your account type is Current Account`);
            console.log(`Account Id: ${this.Ac_Id}`);
            console.log(`Account Type: ${this.Ac_Type}`);
            console.log(`Account Deposit Amount limit per day: ${this.Deposit_Amt}`);
            console.log(`Account  Withdrawal Amount limit per day: ${this.Withdraw_Amt}`);
            console.log(`Thank you `);
        }
        else if (type== "Savings Account") {
            console.log(`Your account type is Savings Account`);
            console.log(`Account Id: ${this.Ac_Id}`);
            console.log(`Account Type: ${this.Ac_Type}`);
            console.log(`Account Deposit Amount limit per day: ${this.Deposit_Amt}`);
            console.log(`Account  Withdrawal Amount limit per day: ${this.Withdraw_Amt}`);
            console.log(`Thank you `);
        }
    }
}
const d1= 20000;
const d2= 10000;
const w1=50000;
const w2=30000;
let SA:ISavingAccount=new Account(1,"Savings ",d1,w1);
let CA:ICurrentAccount=new Account(1,"Current ",d2,w2);
SA.Balence("Savings Account");
CA.Balence("Current Account");