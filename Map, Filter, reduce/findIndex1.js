numbers = [2,345,45,58,63,7];


// finds the first number from the array which satisfies the condition divisbility by 7


const newNum = numbers.findIndex(function (num){
    return num%7==0;
})

console.log(newNum)