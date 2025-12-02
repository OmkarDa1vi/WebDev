//simple calculator

function calculator(num1, num2, operator) {
    
    let res=0;
    
    let a = num1;
    let b = num2;
    let op = operator;

    switch(op) {

        case '+':
            res = a+ b;
            break;

        case '-':
            res = a-b;
            break;
        
        case '*':
            res =a*b;
            break;
            
        case '/':
            res = a/b;
            break;
        
        default:
            res = "Retry";
    }
    return res;
}

console.log("the sum is "+ calculator(4,2,'+'));
console.log("the difference is "+calculator(4,2,'-'));
console.log("the product is "+calculator(4,2,'*'));
console.log("the division is "+calculator(4,2,'/'));


function calci(eq){
    return eval (eq);
}
console.log("the result of equation is "+ calci("4+2*3-6/2"));
