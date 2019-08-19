type bankAccountAlias = {money: number, deposit: (val: number) => void}

let bankAccount: bankAccountAlias = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
}

let myself: {name: string, bankAccount: bankAccountAlias, hobbies: string[]} = {
  name: "Nick",
  bankAccount: bankAccount,
  hobbies: ["Walking", "Video Games"]
}

myself.bankAccount.deposit(3000)

console.log("myself:", myself);