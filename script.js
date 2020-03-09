"use strict";
var names = 'Lexi';
//total US states
var states = 50;
//result of adding 5 and 4
var x = (5 + 4);
//Function declaration
function sayHello(num1, num2) {
    console.log('Hello World!');
    return num1 + num2;
}
sayHello(5, 4);
//say Hello World! with function
function checkAge(age, names) {
    if (age <= 20) {
        alert("Sorry " + names + ", you aren't old enough to view this page!");
    }
}
checkAge(21, 'Charles');
checkAge(27, 'Abby');
checkAge(18, 'James');
checkAge(17, 'John');
var veggies = ['Broccoli', 'Celery', 'Spinach', 'Kale'];
for (var _i = 0, veggies_1 = veggies; _i < veggies_1.length; _i++) {
    var veg = veggies_1[_i];
    console.log(veg);
}
var object1 = {
    names: 'Karen',
    age: 33,
};
var object2 = {
    names: 'Yoda',
    age: 10,
};
var object3 = {
    names: 'Kitty',
    age: 13,
};
var object4 = {
    names: 'Ted',
    age: 21,
};
var object5 = {
    names: 'Linda',
    age: 24,
};
checkAge(33, 'Karen');
checkAge(10, 'Yoda');
checkAge(13, 'Kitty');
checkAge(21, 'Ted');
checkAge(24, 'Linda');
function getLength(word) {
    if (word.length % 2 == 0) {
        return ('The world is nice and even!');
    }
    else {
        return ('The world is an odd place!');
    }
}
console.log(getLength('hello world'));
//
