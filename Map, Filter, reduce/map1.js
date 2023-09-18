// Using forEach
numbers = [2,3,4,5,6,7];
const squares = [];

numbers.forEach(function (num){
    squares.push(num**2);
});

console.log(squares);


// Using map

const squares2 = numbers.map(function (num){
    return num**2;
});
console.log(squares2);

// map arrow function

const squares3 = numbers.map(x => x**2);
console.log(squares3);
