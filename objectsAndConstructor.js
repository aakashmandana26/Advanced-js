function Housekeeper(name, age, yearsOfExperience, cleaningAreas){ //In creation of object function name first initial letter is always capital
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningAreas = cleaningAreas;
}

var h1 = new Housekeeper("Pranav", 21, 2, ['lobby','room'] ) //new is a keyword for creating a constructor

console.log(h1.name)
console.log(h1.cleaningAreas)