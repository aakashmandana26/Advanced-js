// using forEach

numbers = [1,2,3,4,5,6,7,8,9,10];

var sum=0;

numbers.forEach(function (num){
    sum = sum + num;
})

console.log(sum);



// using reduce

var sum2 = numbers.reduce(function (accumulator, currentNum){
    return accumulator + currentNum;
});
console.log(sum2);


// reduce using arrow functions

var sum3 = numbers.reduce((accumulator, currentNum) => accumulator + currentNum);
console.log(sum3);