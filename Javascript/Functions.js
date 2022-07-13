console.log("This is Functions in javascript");

function greet(name){
    console.log(name + " is a good man");
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
}

let name1 = "shubham";
let name2 = "rahul";
let name3 = "shivam";
let name4 = "pranay";

greet(name1);
greet(name2);
greet(name3);
greet(name4);


let returnVal = sum(10,20,30);

console.log(returnVal);