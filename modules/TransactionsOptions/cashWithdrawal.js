import inquirer from "inquirer";
async function otherAmount(balance) {
    const otherAmnt = await inquirer.prompt([{
            name: "oAmnt",
            type: Number,
            message: "Please enter amount"
        }]);
    if (Number(otherAmnt.oAmnt) < 500) { //|| Number (otherAmnt.oAmnt) % 5 !== 0
        console.log("That amount figure is not allowed");
        //console.log("Please enter amount multiple of 5");
        otherAmount(balance);
    }
    else if (otherAmnt.oAmnt > balance) {
        console.log("You have insufficent Balance");
        otherAmount(balance);
    }
    else {
        balance -= Number(otherAmnt.oAmnt);
    }
    return balance;
}
async function cashWithdrawal(balance) {
    if (balance > 500) {
        const amountAnswer = await inquirer.prompt([{
                name: "amount",
                type: "list",
                choices: [
                    '500',
                    '1000',
                    '5000',
                    '10000',
                    'Other'
                ],
                message: "Please select amount"
            }]);
        switch (amountAnswer.amount) {
            case "500":
                balance = balance - 500;
                console.log(`Transaction successful your current balace is: ${balance}`);
                break;
            case "1000":
                balance = balance - 1000;
                console.log(`Transaction successful your current balace is: ${balance}`);
                break;
            case "5000":
                balance = balance - 5000;
                console.log(`Transaction successful your current balace is: ${balance}`);
                break;
            case "10000":
                balance = balance - 10000;
                console.log(`Transaction successful your current balace is: ${balance}`);
                break;
            case "Other":
                balance = await otherAmount(balance);
                console.log(`Transaction successful your current balace is: ${balance}`);
                break;
        }
    }
    else {
        console.log("You have insufficient balance");
    }
    return balance;
}
export default cashWithdrawal;
