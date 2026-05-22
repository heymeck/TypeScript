// type inference and type annotations are the two primary ways to define the types of your data. While annotations involve you explicitly telling TypeScript what a type is, inference is the compiler "guessing" the type based on the value provided.

// Example of type inference 

// here we have not given the data type to the speed variable but typescript will automatically understand that the speed variable has datatype
// number based on the provided value. when you hover over the speed variable it will show it's datatype inference by typescript

let speed=100;

// now here if we try to change the value from number to string it will throw an type error

// it will throw this error:-  Type 'string' is not assignable to type 'number'

// speed = "fast";   





// here is the example of another type of type inference whether the data type could be anything depends on the if-else, 
// when you hover over the variable cups it will show the datatype which will be written in or logic to implify that data can be either number or string
    let cups = Math.random()*10>5?7:"less";
// in above line there is a if else condition that if the the random number is greather than 5 than the cups will be in number datatype which is 7 
// else the cup will be in string datatype which is less.
console.log(cups);


// type annotation: in type annotation we explicitly give the data type to variable
// here we explicitly told the name variable that the variable has string datatype and cannot be assigned any other value rather than string
let name:string= "Hemant";








