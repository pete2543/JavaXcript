console.log(getBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));
function getBudget(x){
    let sum = 0;
    let number = x.reduce(function (acc, current) {
        return acc + current.budget
    }, sum)
    return number;
}
console.log(getBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));