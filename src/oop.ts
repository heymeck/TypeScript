// Object oriented concepts in TypeScript

class Chai {
    // here we can declare the properties and the default value of them 
    flavour:string="ginger"
    // price:number;
    currency:string;

    // here we have created a constructor to set the property that we take from the user 
    constructor(currency:string){
         this.currency=currency
    }
}

let chai= new Chai("usd");
chai.flavour="masala";

console.log(chai.flavour);
console.log(chai.currency)




// Access modifiers in the class

// there are multiple access modifiers in classes which is used to give or restrict access to the user

class User{
    public username:string; // this is a public property of the class which can be access at any newly created object using new keyword

    private password:string="123"; // this is private access modifier which can only be accesses within class

    // we can also declare the private modifier by writing # before the key like below

    #balance:number= 4450;

    reveal(){  // this is a method to see the value in the private property of the class
        return this.password
    }
    checkBalance(){
        return this.#balance;
    }

    constructor(username:string){
        this.username=username;
    }
}

const Arvind = new User("Arvind");





// Example of protected access modifier

class Shop {
        protected realName:string="Hemant Software ltd";  // it can be access within the class or the class that inherits this class
}

class Branch extends Shop{

    // here we can access the protected property that is inside the class shop 
    getShopName(){
        return this.realName;
    }
}

let shop= new Branch();
console.log(shop.getShopName())




// readonly keyword in classes

class Cup {
    readonly capacity:number=250;

    constructor(capacity:number){
        this.capacity=capacity;
    }
}





// example of Control gates also called getter setter

class Juice {
    // it is a good practice to write the keyword private and write _ before the variable  instead of using #symbol
    private _sugar:number=2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        this._sugar=value
    }
}

let orangeJuice = new Juice();

console.log(orangeJuice.sugar=7)




// static members in the typescript

class Store{
    static storeName:string="Hemant General Store";
    constructor(public category:string){ }
}

console.log(Store.storeName);





// sometimes we need class that we want cannot be used to create an object from them to declare those classes we use abstract classes or abstract keyword

abstract class Drink{
    abstract make():void{

    }
}

class MyChai extends Drink{
    make(){
        console.log("Brewing Chai")
    }
}
