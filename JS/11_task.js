// function to divide 2 numbers and return error message using try catch
function divide(a,b){
    try {
        if(b === 0){
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }    catch (error) {
        return error.message;
    }   
}