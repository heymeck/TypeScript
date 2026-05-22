// type narrowing is concept which helps you to narrow down the data type which you don't know yet. for example: let's assume you called an api which will give you some data and you don't know the type of the data yet but as below we have created a function to narrow down the type of the data. In below function we have created a function get data in which we have expecting a argument to be passed which is data and we don't know the type of the data yet, hence we added a if else condition to narrow down the data type

function getData(data: number | string) {
  if (typeof data === "string") {
    return `the data is ${data} `;
  }
  return `the data no is: ${data}`;
}

// here we declared a function which tells the truthiness of the msg. in this we are narrowing the msg is passed or not we implemented ternary operator to check if the msg is passed ? before the : is used to check if it's true or not
function getMsg(msg?: string) {
  if (msg) {
    return ` the message is ${msg}`;
  }
  return `Delivering the default msg`;
}

function getCoffee(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `serving ${size} coffee`;
  }
  if (size === "medium" || size === "large") {
    return `serving extra coffee`;
  }
  return `${size}`;
}

console.log(getCoffee(45));

class ObjData {
  serve() {
    return `serving object data`;
  }
}

class ArrData {
  serve() {
    return `serving Array data`;
  }
}

function serve(data: ObjData | ArrData) {
  if (data instanceof ObjData) {
    return data.serve();
  }
  return data.serve();
}

// You can also declare you own type with type keyword

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Tea = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Tea) {
  switch (order.type) {
    case "masala":
        return `MasalChai`
      break;
    case "elaichi":
        return `Elaichi Chai`
      break;
    case "ginger":
        return `Ginger Chai`
      break;

    default:
      break;
  }
}
