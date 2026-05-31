//   to declare the array we can use following method

const names:string[]=["hemant","Arvind","Rahul"];
const age:number[]=[3,43,43];

// another method to declare the array is using the array Keyword

const arr:Array<number>=[2,33,64];

// to create an array of object we first create data type of the object

type User={
    name:string;
    age:number;
    gender:string;
    hasPowers:boolean;
}

const person:User=[
    {name:"Hemant",age:34,gender:"Male",hasPowers:true},
    {name:"Arvind",age:34,gender:"Male",hasPowers:false}
]

// there is a type of array call read only array which cannot be updated once defined to declare this we use readonly keyword

const cities:readonly string[]=["delhi","Ghaziabad"]

// to declare the two dimensional array
 
const table:number[][]=[
    [1,2,4],[7,43,2]
]

// tuples in typeScript is used to strictly define the format, so if you have given the format of name first and then age then you have to do the 
// same for the other

// declaring the tuple
let user:[string, number];

// defining and updating the tuple

user=["Hemant",34];
user=["Yuvraj",24];

// readonly tuples cannot be updated once defined

let customer:readonly [string,number]= ["Arvind",23];

// named tuples is when we give the name or key to the values, it is a good practice to create named tuples instead of unnamed tuples

let passenger:[name:string,hasTicket:boolean,age:number];
// since it has strict format checking you cannot give age before any of the other properties like name or hasTicket
passenger=["Hemant",true, 24]



// Enum in typescript is use to restrict the choices of user

enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
}


// USE OF ENUMS

const size=cupSize.LARGE

// there is an automatic  behaviour in enum which increase the value of the other properties inside it, for example let's say you have created and enum
// and to the first property you have given the value 100 and leave the rest without value then the typescript will automatically assign the value
// to the other properties in increasing order

enum status{
    PENDING=100,
    SERVED, // here the type script will provide this enum property the value 101
    CANCELLED,// here it will be 102 and so on
}

let checkStatus=status.SERVED

enum UserType{
    OLD="old",
    YOUNG="young",
    INFANT="infant",
    TEENAGE="teenage"
}

function userAge(type:UserType){
    console.log(`the user is : ${type}`)
}

userAge(UserType.INFANT);

// enum's not standard practice to define the value in multiple datatype and you can also make an enum a constant

enum RandomEnum{
    ID=23,
    Name="Hemant"
}

const enum Sugar{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

let s= Sugar.HIGH
