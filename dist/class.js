"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this.balance -= amount;
    }
}
let account = new Account(1, "Nitin", 100);
account.deposit(200);
account.withdraw(400);
console.log(account.balance);
console.log(account);
//# sourceMappingURL=class.js.map