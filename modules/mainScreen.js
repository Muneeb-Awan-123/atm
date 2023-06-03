import inquirer from "inquirer";
import cashWithdrawal from "./TransactionsOptions/cashWithdrawal.js";
import AddAmount from "./TransactionsOptions/deposits.js";
import moneyTransfer from "./TransactionsOptions/transfer.js";
import BillPayment from "./TransactionsOptions/billPayment.js";
async function doAnotherTransaction() {
    const moreTransaction = await inquirer.prompt([{
            name: "otherTran",
            type: "list",
            choices: ['Yes', 'No'],
            message: "Do You want another transaction"
        }]);
    return moreTransaction;
}
async function mainScreen(balance) {
    do {
        const answer = await inquirer.prompt([{
                name: "mainOption",
                type: "list",
                choices: [
                    'Transfer',
                    'Cash Withdrawal',
                    'Bill payments',
                    'Balance Inquiry',
                    'Deposits',
                    'Exit'
                ],
                message: "Please Now select a transaction"
            }]);
        switch (answer.mainOption) {
            case "Balance Inquiry":
                console.log(`your balance is: ${balance}`);
                break;
            case "Cash Withdrawal":
                balance = await cashWithdrawal(balance);
                break;
            case "Deposits":
                balance = await AddAmount(balance);
                break;
            case "Bill payments":
                balance = await BillPayment(balance);
                break;
            case "Transfer":
                balance = await moneyTransfer(balance);
                break;
            case "Exit":
                anotherTrans = "No";
                break;
        }
        if (answer.mainOption !== "Exit") {
            var anotherTrans = await doAnotherTransaction();
        }
    } while (anotherTrans.otherTran == "Yes");
}
export default mainScreen;
