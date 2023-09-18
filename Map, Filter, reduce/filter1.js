// using forEach

numbers = [32,34,6,65,33,3,6,4];

const newNumbers = []
 
numbers.forEach(function (num){
    if(num>10){
        newNumbers.push(num);
    }
})
console.log(newNumbers);


// using filter

const newNumbers2 = numbers.filter(function (num){
    return num>10;
});

console.log(newNumbers2);


const newNumbers3 = numbers.filter( num => num>10);
console.log(newNumbers3);
