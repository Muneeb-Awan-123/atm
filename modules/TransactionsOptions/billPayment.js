import inquirer from "inquirer";
const electricityBill = 6000;
const gasBill = 500;
const PhoneBill = 2500;
async function BillPayment(balance) {
    const bill = await inquirer.prompt([{
            name: "bill",
            type: "list",
            choices: ['Electricity', "Gas", "Phone"],
            message: "Select which Bill you want to pay"
        }, {
            name: "Bill Number",
            type: Number,
            message: "Enter bill Number"
        }]);
    switch (bill.bill) {
        case "Electricity":
            console.log(`your Electricity Bill is ${electricityBill}`);
            const confrim = await inquirer.prompt([{
                    name: "confrimation",
                    type: "list",
                    choices: ["yes", "no"],
                    message: "Do you want to pay?"
                }]);
            if (confrim.confrimation === "yes") {
                if (balance < electricityBill) {
                    console.log('you have insufficent balance');
                }
                else {
                    balance -= electricityBill;
                    console.log("Your bill has been paid");
                    console.log(`your available balance is ${balance}`);
                }
            }
            break;
        case "Gas":
            console.log(`your Gas Bill is ${gasBill}`);
            const gasconfrim = await inquirer.prompt([{
                    name: "confrimation",
                    type: "list",
                    choices: ["yes", "no"],
                    message: "Do you want to pay?"
                }]);
            if (gasconfrim.confrimation === "yes") {
                if (balance < gasBill) {
                    console.log('you have insufficent balance');
                }
                else {
                    balance -= gasBill;
                    console.log("Your bill has been paid");
                    console.log(`your available balance is ${balance}`);
                }
            }
            break;
        case "Phone":
            console.log(`your Phone Bill is ${PhoneBill}`);
            const phoneconfrim = await inquirer.prompt([{
                    name: "confrimation",
                    type: "list",
                    choices: ["yes", "no"],
                    message: "Do you want to pay?"
                }]);
            if (phoneconfrim.confrimation === "yes") {
                if (balance < PhoneBill) {
                    console.log('you have insufficent balance');
                }
                else {
                    balance -= PhoneBill;
                    console.log("Your bill has been paid");
                    console.log(`your available balance is ${balance}`);
                }
            }
            break;
    }
    return balance;
}
export default BillPayment;
