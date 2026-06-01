// generics are template of creating an object just like type and interfaces but it also make the code reusable in some manner

// here is an example of a generic used to create an array of the same data type in this wrapInArray is the name of the function and after that <T> is the datatype given to it and inside the parameter it is the same datatype it will take and it will return the array of the same datatype received
function wrapInArray<T>(item:T):T[]{
    return [item]
}

// here we can pass value of any datatype in the arg and it will return the array of it
wrapInArray("Masala")
wrapInArray(45)

console.log(wrapInArray({name:"Hemant",age:24}))


function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}

pair("Hemant",24);
pair("male","loni");



// creating a generic interface and type

interface Gen<T>{
    content:T
}

const number:Gen<number>={
    content:10,
}
const str:Gen<string>={
    content:"10",
}





// generic will mostly be used in api calls or react state management

// here we have created an interface api promise in which we have expected a generic t type and there properties status with number datatype and data with generic type
interface APIPromise<T>{
    status:number;
    data:T;
}


// here we have created an object with the same interface and after the APIPromise inside the <>  we have given the generic t an object and further more inside the object there are key and value with type string
const call:APIPromise<{flavour:string}>={
    status:200,
    data:{flavour:"masala"}
}