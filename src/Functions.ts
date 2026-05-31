

// writing a basic function, 
// syntax: function name(parameter:type):returnType { Code }

function User(greeting:string,userId:number):void{
    console.log(`${greeting}, ${userId}`)
}
User("Welcome",453);



function createChai(order:{
    type:string;
    ingredient:string[];
    isHot:boolean;
}):number{
    return 4;
}