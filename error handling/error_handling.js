// raise exception
// throw "my error";
// throw 422;
// throw true;
// throw {message: "Error Message", status: 404};
// throw ["one" , "two", "three"];

// let customEorror = (msg) => {
//     this.message = msg;
//     this.name = "Custom Error";
// }

// throw new customEorror("Something went wrong");

//handle exception
// try {
//     throw "Something went wrong";
// } catch(e) {
//     console.log(`Error: ${e}`);
// }

// try catch finally
// try {
//     console.log("try block ran");
// } catch {
//     console.log(`Error: ${error}`);
// } finally {
//     console.log("finally block ran");
// }

// let subtractTwoThings = (num1, num2) => {
//     let answer;

//     try {
//         answer = num1 - num2;
//         if(isNaN(answer)) {
//             throw "Invalid input";
//         }
//         return answer;
//     } catch(error) {
//         console.log(`Error: ${error}`);
//         return false;
//     } finally {
//         return "final return";
//     }
// }

// console.log(subtractTwoThings(43, 'bob'));

// openMyFile();
// try {
//     writeMyFile(theData);
// } catch(error) {
//     handleError(error);
// } finally {
//     closeMyFile();
// }

let outputPrecision = (number, precision) => {
    try {
        let manyDecimals = number.toPrecision(precision);
        if(number || precision < 1) {
            console.log(`${number} with ${precision} significant digits looks like:`);
            console.log(manyDecimals);
        } else {
            throw "Precicion must be between 1-100";
        }
    } catch(error) {
        console.log(`error: ${error}`);
    } finally {
        
    }
}

outputPrecision(3.1459, 20)

module.exports = outputPrecision