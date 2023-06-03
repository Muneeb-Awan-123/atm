import inquirer from "inquirer";
import users from "../users.js";
async function moneyTransfer(balance) {
    const recAccount = await inquirer.prompt([{
            name: "reciverAcc",
            type: Number,
            message: "Enter reciever account number"
        }]);
    let userExist = users.find(x => x.accountNumber == Number(recAccount.reciverAcc));
    if (typeof userExist !== "undefined") {
        const amount = await inquirer.prompt([{
                name: "sendAmount",
                type: Number,
                message: "Enter amount you want to send"
            }]);
        if (amount.sendAmount > balance) {
            console.log("You have insufficent balance Number");
        }
        else {
            balance -= Number(amount.sendAmount);
        }
        return balance;
    }
    else {
        console.log("Enter valid Account Number");
        balance = await moneyTransfer(balance);
        return balance;
    }
}
export default moneyTransfer;
