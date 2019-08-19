var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Nick",
    bankAccount: bankAccount,
    hobbies: ["Walking", "Video Games"]
};
myself.bankAccount.deposit(3000);
console.log("myself:", myself);
