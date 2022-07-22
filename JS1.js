//Створення зміниих,присвоєння значень та виведення змінних
let h;
h='hello';
console.log(h);
alert(h);
document.write(h + ' ')

let o;
o='owu';
console.log(o);
alert(o);
document.write(o + ' ');

let cO;
cO='com';
console.log(cO);
alert(cO);
document.write(cO + ' ');

let d;
d='ua';
console.log(d);
alert(d);
document.write(d + ' ');

let oNe;
oNe=1;
console.log(oNe);
alert(oNe);
document.write(oNe + ' ');

let tEn;
tEn=10;
console.log(tEn);
alert(tEn);
document.write(tEn + ' ');

let negativeNumber;
negativeNumber=-999;
console.log(negativeNumber);
alert(negativeNumber);
document.write(negativeNumber + ' ');

let numbers;
numbers=123;
console.log(numbers);
alert(numbers);
document.write(numbers + ' ');

let p;
p=3.14;
console.log(p);
alert(p);
document.write(p + ' ');

let float;
float=2.7;
console.log(float);
alert(float);
document.write(float + ' ');

let number;
number=16;
console.log(number);
alert(number);
document.write(number + ' ');

let oneBool;
oneBool= true;
console.log(oneBool);
alert(oneBool);
document.write(oneBool + ' ');

let twoBool;
twoBool= false;
console.log(twoBool);
alert(twoBool);
document.write(twoBool + ' ');

//Конкатенація
const firstName='Roman';
const middleName='Mykhailovych';
const lastName='Tril';
const person=lastName +' '+ firstName +' '+ middleName;
console.log(person);

//Визначення типів змінних
let a;
a=100;
console.log(typeof a);

let b;
b='100';
console.log(typeof b);

let c;
c=true;
console.log(typeof c);

//prompt().Отримати три слова та вивести в консоль
let naMe;
naMe=prompt("Як Вас звати?");
console.log(naMe);

let nameMiddle;
nameMiddle=prompt(naMe +" Як Вас По-Батькові?");
console.log(nameMiddle);

let aGe;
aGe=+prompt(naMe + " " + nameMiddle + " Ваш вік?");
alert(naMe + " " + nameMiddle + " Гарного дня!")
console.log(aGe);


