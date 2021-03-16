const people = ["Aaron","Mel","John"];
const one=1;
const b= true;
const employee = {
    firstName: "Pete",
    lastName: "pp",
};

function sayHello(person) {
    console.log("Hello" + person.firstName);

}
console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);