// 11_Input_CMD3.js


const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operation = args[2];

if (!num1 || !num2 || !operation) {
    console.log("Usage: node calculator.js <num1> <num2> <operation>");
    process.exit(); // at this line exit program, no program run farword.
}

switch (operation) {
    case 'add':
        console.log(`Result: ${num1 + num2}`);
        break;
    case 'subtract':
        console.log(`Result: ${num1 - num2}`);
        break;
    case 'multiply':
        console.log(`Result: ${num1 * num2}`);
        break;
    case 'divide':
        console.log(`Result: ${num1 / num2}`);
        break;
    default:
        console.log("Invalid operation. Use add, subtract, multiply, or divide.");
}

// op
    // cmd :  node 11_Input_CMD3.js 10 5 add
    //      Result: 15



