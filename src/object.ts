// creating object in typescript is same as javascrip

let user= {
    username:"heymeck",
    age:24,
    gender:"male"
}

// but behind the scene typescript is inferencing the data types of the properties of the user object and it look like this

    // {
    //     username:string;
    //     age:number;
    //     gender:string;
    // }

//  to make a good practice we declare the data types here instead of = we are using : after User

let User:{
    name:string;
    age:number;
    gender:string;
}

// the benefit of this is now every time we change the object it will give the suggestion and the datatype of the properties and also tells us that 
// there are properties need to be define for this object

User={
    age:34,
    gender:'male',
    name:"arvind"
}

// Another example of declaring object and also the array in the property

type Customer={
    name:string;
    age:number;
    isMale:boolean;
    bodyParts:string[];   // here we have given the value of property bodyParts to be the array of the strings

}

let c1:Customer={
    age:45,
    isMale: true,
    name:"rahul",
    bodyParts: ["hands","legs","head"]
}



// example of duck typing in typescript. It says that it will need bare minimum data from the datatype for example 

// here we have declare a type in which the type of the size is string
type cup={size:string};

// here we have declared a variable smallCup with datatype cup and define the size to be small
let smallCup:cup={size:"small"};

// now we have declare another variable name bigCup in which we directly define the property size and material
let bigCup={size:"200ml",material:"steel"};

//  and now here we have assigned the value in the smallCup from the bigCup even though that bigCup holds an extra property of material the small 
// cup will take only the required property from the bigCup which is size this is called duck typing
smallCup=bigCup


// Data Separation / splitting the datatypes

type item={ name:string; quantity:number};
type Address={city:string; pin:number};

type order={
    id:string;
    items:item[];
    address:Address
} 

//  to update the value in an object partially or for some specific keys we use keyword partial before providing the datatype to the variable
// for example without using the word partial we have to rewrite or update all the keys of an object but when we use the partial keyword we can
// only update a specific key

// here we have created a datatype passenger
type Passenger={
    name:string;
    age:number;
    ticketPrice:number;
}

const updatePassenger=(updates:Partial<Passenger>)=>{
    console.log(`updating the passenger datatype partially:`,updates);
}

updatePassenger({ticketPrice:45});


// use of keyword Required which is used in method to say that the object that is going to be pass in the method required all the properties even if
// you have declared them optional while declaring the type. Example below

type Car={
    name?:string;
    model?:number;
}

// use of keyword Required

const getCar=(order:Required<Car>)=>{
    console.log(`getting the car:`,order);
}

// calling the method, if we don't provide it the object with properties it will throw error even if we have declared the properties as optional
// in the datatype

getCar({model:2026,name:"Hyundai"})

// Pick keyword is used to pick the particular data from the object it is similar to the keyword partial

type Alcohol ={
    Brand:string;
    old:number;
    alcoholQuantity:number;
    ingredients:string[];
}

// creating a new type with pick keyword
type basicAlcohol=Pick<Alcohol,"Brand"|"alcoholQuantity">

const Daru:basicAlcohol={
    Brand:"Old Monk",
    alcoholQuantity:34,
}

const getAlcohol=(order:Pick<Alcohol,"Brand"|"alcoholQuantity">)=>{
    console.log("getting the alcohol",order)
}

// use of Omit keyword. it is used to omit some properties or values from the object

type ColdCoffee={
    price:number;
    iced:boolean;
    size: "small"|"medium"|"large";
    ingredients:string[]
}

type drink=Omit<ColdCoffee,"ingredients">

// here we can access all the value from ColdCoffee except the ingredients
let obj:drink={
   iced:true,
   price:23,
   size:"large"
}
