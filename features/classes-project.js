/**
 * Created by willcarpenter on 3/26/17.
 */

// create bankAcct class
// allow constructor to take balance -- default this.balance to 0 if not num

// Deposit (amount) add to balance, return true. If not a num print error message and return false
// Withdrawal (amount) subtract from balance, return true. ...........same
// printBalance no arguments ... this balance to print balance to console

//  var account = new BankAccount(100);


class BankAccount {
    constructor(balance = 0) {
        this.balance = typeof balance === 'number' ? balance : 0;
        console.log(`Your initial balance is ${this.balance}`);
    }
    deposit(amount) {
        if(typeof amount === 'number') {
            this.balance += amount;
            console.log(`You deposited ${amount}`);
            console.log(`After deposit, new balance is ${this.balance}`);
            return true;
        } else {
            console.log( 'Error, deposit.' );
            return false;
        }
    }
    withdraw(amount) {
        if(typeof amount === 'number'){
            this.balance -= amount;
            console.log(`Your remaining balance is ${this.balance}`);
            console.log(`After withdraw, new balance is ${willchecking.balance}`);
            return false;
        } else {
            console.log('Error, withdraw');
            return true;
        }
    }
    printBalance() {
        console.log(`Your current balance is ${this.balance}`);
    }
}




const willchecking = new BankAccount(100);

willchecking.deposit(30);

willchecking.withdraw(199);

willchecking.printBalance();

