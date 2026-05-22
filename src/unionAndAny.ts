// union and any in the typescript is used to assign the variable the type of datatype where union tells that the variable can be of types 
// provided by you using a pipe(|) datatype and when you give the variable type any it removes the type checking process for that particular variable. Avoiding the use of
// any is considered to be a good practice 

// here is the use of union which tells the speed variable can either be of datatype number or string, when we assign the value to speed we can assign it either string or number here the datatypes are separated by pipe which tells it can any of the give datatype
let speed:number|string;

speed=45;
// speed ="fast";
console.log("this is the example of union",speed);

// another example of union is below which is used to tell the typescript that this variable can only hold the given pipe separated value

let airlineSeat:"Aisle"|"middle"|"window"="window" //here we have used union like we define a variable airlineSeat which can be assigned any of the pipe separated value if you try to assign it a different value it will throw an error.

// airlineSeat="front"  //this line throw error of: front is not assignable



// any is used to tell remove the typechecking process from typescript for a particular variable

let num:any;  // now as you have tell the num is any type you can assign any value to the num variable a number,string or boolean

num="three";
num=44;
num=true;
console.log("here is the example of any",num)

let currentOrder:string|undefined;

let orders=["45","34","344","21"];
for(let order of orders){
    if(order==="34"){
        currentOrder=order;
        break
    }
}
console.log(currentOrder)

