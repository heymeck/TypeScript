// type assertion is the process in which we deliberately tell the typescript that it is of that data type that you want because sometime the data 
// come from the localStorage or the when we declare a with any dataType does not implicitly take the data type even if we assigned it the value then 
// there come the concept of type assertion in which we use (as) keyword to tell the ts that take it as the desire datatype;

// Example

let response:any="45";

// here the type assertion will fail as we have declared a variable above with data type any and provided the value of string 45 then we might think
// that it will be assumed as string by typescript as inference but down below when we try to access the variable the ts will not give us the 
// suggestion of string

// here we are creating the variable responseLength of datatype number and when try to assign it the value of length of the string the ts will not give suggestion 

let responseLength:number= response.length

// In the above case we have to do forceful type assertion in which we deliberately tell the ts compiler to take the variable as string

// here when we use as keyword it is telling the ts compiler that assert this variable as the desired datatype and after that ts will give us the suggestion
// methods according to the data type
let numericLength:number= (response as string).length

type Book={
    name:string;
};

let BookString:string=`{"name":"White nights"}`;

let bookObject=JSON.parse(BookString) as Book
console.log(typeof bookObject)

// use of any 

// here we have declare variable value with any data type and assign value 45;
let value:any=45;

// now we will constantly change the data type of value variable
value="Hemant";
value=[4,56,2];
value=4.5;

// as we have last define the value of variable value is 4.5 this means we cannot use the methods of string on it as it is a number
// but ts will not 

// here the ts will not warn us that you cannot use string method on the variable as it is assigned a number it will definitely throw error at 
// compile time 
// value.toUpperCase();

// here we have declare variable nweValue with any data type and assign value 45;
let newValue:unknown=45;

// now we will constantly change the data type of newValue variable
newValue=[4,56,2];
newValue=4.5;
newValue="Hemant";

// but in unknown case the ts will warn that you have to tell him the datatype before use

console.log((newValue as string).toUpperCase())



// use of never

// here we are declaring a type which can be either admin or user

type Role="admin"|"user";

// declaring a function to type narrowing the datatype 

function redirectRole(role:Role):void{
    //  here we are handling if the datatype is admin we are redirecting it to the admin dashboard
    if(role==="admin"){
        console.log(`Redirection to the admin dashboard`)
        return;
    }

    //  here we are handling if the datatype is admin we are redirecting it to the admin dashboard
    if(role==="user"){
        console.log(`Redirecting to user dashboard`)
        return
    }
    // but when we write the role parameter again here and hover on it it will display never as the datatype of role are handled and writing this 
    // further is never required but as soon as you add one more datatype in the type Role it will change and display the unhandled datatype
    role;
}