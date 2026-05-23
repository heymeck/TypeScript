// here we are declaring the data type chai
type Chai = {
  type: string;
  sugar: number;
  strong: boolean;
};

// here we can write it like this
function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}
// or either we can directly this
function serveChai(order: Chai) {
  console.log(order);
}

// the need of using this is that sometime we need to to convert the js code to typescript and we can face some issues like if an object is only using once
// in the code than we can use that example of function makeChai or when the the object is in js code is being used 1000 times in the code then to
// make the code readable the good practice is to create a type of the object and use it like in the function example serveChai

type teaRecipe = {
  water: number;
  milk: number;
};

class greenChai implements teaRecipe {
  milk = 50;
  water = 100;
}

type CupSize = {
  size: "small" | "large";
};

class gingerChai implements CupSize {
  size: "small" | "large" = "small";
}

// type response = {ok:true}|{ok:false};   // will throw error
// class myres implements response{
//     ok:boolean=true;
// }

type teaType = "masala" | "ginger" | "elaichi";

function order(t: teaType) {
  console.log(t);
}

// intersection example

type baseChai = { teaLeaves: number };
type extra = { masala: number };
type customizedChai = baseChai & extra; // here the customizedChai has both the type and property access of base and extra

let cup: customizedChai = {
  teaLeaves: 45,
  masala: 45,
};

// example of optional parameter
type User = {
  username: string;
  bio?: string;
};

let u1: User = { username: "hemant" };
let u2: User = { username: "Arvind", bio: "coder of the world" }; // here we have added the bio in the object as the datatype User has it as optional

console.log({ u1, u2 });

//  example of read only keyword

type config = {
  readonly appName: string; // here we have written readonly keyword before app name so that the user can only read it but we need to set it once, once it's set it cannot be change
  version: number;
};

let settings: config = { appName: "MasterJii", version: 4.5 };
console.log(settings);
//  now the app name cannot be change even if you try it

// settings.appName="green"

// Example of interface

// interface is preferable to implements in class

interface chaiRecipe {
  water: number;
  milk: number;
}

class adarakChai implements chaiRecipe {
  milk = 450;
  water = 900;
}

interface glassSize {
  size: "small" | "large";
}

class Choi implements glassSize {
  size: "small" | "large" = "small";
}
