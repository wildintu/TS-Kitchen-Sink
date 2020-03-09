let names = 'Lexi';

//total US states
const states = 50;

//result of adding 5 and 4
let x = (5 + 4);

//Function declaration
function sayHello(num1: number, num2: number) {
    console.log('Hello World!');
    return num1 + num2;
}

sayHello(5,4);
//say Hello World! with function

function checkAge(age: number, names: string) {
    if (age <= 20) {
        alert("Sorry " + names + ", you aren't old enough to view this page!");
    }
}

checkAge(21, 'Charles');
checkAge(27, 'Abby');
checkAge(18, 'James');
checkAge(17, 'John');

let veggies =['Broccoli', 'Celery', 'Spinach', 'Kale'];
    for(let veg of veggies) {
        console.log(veg);
    }

let object1 = {
    names: 'Karen',
    age: 33,
}

let object2 = {
    names: 'Yoda',
    age: 10,
}

let object3 = {
    names: 'Kitty',
    age: 13,
}

let object4 = {
    names: 'Ted',
    age: 21,
}

let object5 = {
    names: 'Linda',
    age: 24,
}

checkAge(33, 'Karen');
checkAge(10, 'Yoda');
checkAge(13, 'Kitty');
checkAge(21, 'Ted');
checkAge(24, 'Linda');

function getLength(word: string) {
   if (word.length % 2 == 0) {
       return ('The world is nice and even!');
   } else {
       return ('The world is an odd place!');
   }
}

console.log(getLength('hello world'));
//