function calculate(num1, num2, operator){
    switch(operator){
        case "/":
            var result = num1 / num2;
            break;
        
        case "-":
            var result = num1 - num2;
            break;
    
        case "*":
            var result = num1 * num2;
            break;
        
        case "+":
            var result = num1 + num2;
            break;

        default:
            var result = "Invalid operator";
            break;
    }

    console.log(result)

}

calculate(10,5,'*')


