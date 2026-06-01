// the main goal of an interface is to shape an object it can be interchange with the type to 70-80%

// it only define the structure of an object but do not generate the javascript code

interface Drink{
    // it can also be define as readonly property
    readonly id:number;
    Flavour:string;
    price:number;
    // optional property can also be define in this
    milk?:boolean;
}

const orangeJuice:Drink={
    id:45,
    Flavour:"orange",
    price:45,
}

// use of interfaces

interface Shop{
    readonly GSTNO:string;
    Name:string;
}

const s:Shop={GSTNO:"hk34kt",Name:"Hemant General Store"}

// s.GSTNO=54; // it cannot be done as the GSTNO is a readonly property




// defining structure of method in interfaces

interface Discount{
    (price:number):number;
}

const peg:Discount=(p)=>p*0.5;

// defining multiple method structure in the interface

interface generator{
    start():void; // here we have given the structure of the method but did not define it.
    stop():void;
}

const machine:generator={
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}
machine.start()




// Indexed Signature

interface ShoesRating{
    [flavour:string]:number;
}

const rating:ShoesRating={
    canvas:4.3,
    sneaker:5,
    sports:3
}

console.log(rating)




// interface merging

// let's say you have imported a library in your code and it has an interface User

interface User{
    name:string;
}

// and you also have created an User interface yourself

interface User{
    age:number;
}

// but when you try to create an object using the user interface you have to satisfy both the property of library user interface and the interface you created

let u:User={
    age:34,
    name:"Hemant"
}

// the explicit behavior of merging the interfaces

interface A{a:string};
interface B{b:string};

interface c extends A,B{c:string} // here it is working same as merging and holds both of the property of interface A and B but this time we explicitly merged it


