 // console

 // console.log(5);

 // let, const, var

// const number = 64;

 //console.log(number);

 // type -number, string

 // let person = 18;
 // person = "Alex";

// console.log(person);

// латинские буквы, _, цифры
// переменная не может начинатся с цифры
// название должно быть осмысленно

// camelCase
// personName

// snake_case
// person_name

// alert сообщение при открытии сайта

// alert("Hello World!");

// prompt - запрос у ползователя информации

// let age = prompt("How old are you?"); // return string 25 => "25"
// console.log(age);

// typeof

// console.log(typeof age);


// +, -, *,/, (% - выводит остаток)

// console.log(5 % 2);
// console.log(5 ** 5);

//const test = "1";
// console.log(test);
// console.log(+test); // - меняем тип данных с string на number
//console.log("25" + "16");
//console.log(+"25" + +"16");
//console.log("25" - "16");

// конкатенация

//const name = "Alex";

//console.log("My name is" + " " + name);


// интерполяция

//const path = "toys";

//console.log(`https://google.com${path}´);

//const r = 12;
//const g = 34;
//const b = 14;
// "rgb(12,34,14"


//console.log("rgb(" + r + "," + g + "," + b + ")");

//console.log(`rgb(${r},${g},${b})`);

//const num = 25;
//const string = num + "";
//console.log(typeof num, num);
//console.log(typeof string, string);

//console.log(+"a");
// Nan - not a number

//console.log("b" + "a" + + "a" + "a"); //baNana

// сравнение

// console.log("1" == 1);
// console.log("1" === 1);

// console.log(Nan === Nan); // false

// isNan => true/false

//const a = +"a";

//console.log(isNan(a));
//console.log(isNan(5));

// let age = prompt("How old are you?");
// let days = age * 365;
// console.log(days);

// Запрашиваем число 5 прибавляем 2 =  в квадрат ** 2

// let num = prompt("write the number 5");

// console.log((+num + 2) ** 2);

// берем два числа и в console увидим емли равны YES усли нет No

// if else

// let num1 = prompt("Add first number:");
// let num2 = prompt("Add second number:");

// if (num1 === num2) {
// console.log("Yes")
// } else {
//     console.log("No");
// }
// 1
// num => 1 не равно нулю
// num => 0 равен 0;

// let num = prompt("Add number:");
// if (num === 0) {
//     console.log(num + " " +  "равен 0")
// } else {
//     console.log(num + " " +  "не равен 0")
// }

// let num = prompt("Add a number:");

// // !=  =  ==
// if(+num !==0) {
//     console.log(num + "не равно 0");
// } else {
//     console.log(`${num} равен 0`);
// }

// let num1 = prompt("Add first number:");
// let num2 = prompt("Add second number:");

// if(+num1 > +num2) {
//     console.log("первое число больше второго");
// }else if(+num2 > +num1) {
//     console.log("второе число больше превого");
// }else {
//     console.log("оба числа равны");
// }

// num % 2 === 0

// let num = prompt("Add number:")

// if(+num === 0) {
//     console.log("число равно 0");
// } else if(+num % 2 === 0) {
//     console.log("число  четное");
// } else  {
//     console.log("не четное число");
// }


// isNan

let num = prompt("Add a number:");
if(isNaN(+num)) {
    console.log("Получится Nan");
} else {
    console.log("Это значение можно переобразовать в число");
}

