import inquirer from "inquirer";
async function AddAmount(balance) {
    const answer = await inquirer.prompt([{
            name: "depAmount",
            type: Number,
            message: "Enter amount you want to deposit"
        }]);
    balance += Number(answer.depAmount);
    return balance;
}
export default AddAmount;
