// 3.1
/* let num1 = 7.45;
let num2 = "13.56";
let result = (num1, num2) => Math.round(num1) * parseInt(Math.round(num2));
document.write(result(num1, num2));
 */

// 3.2
/* let num1 = 20.3;
let num2 = 27.2;
let result = (num1, num2) => (num1 + num2).toFixed(2);
console.log(result(num1, num2)); */

// 3.3
/* let num = 77;
let result = (par) => Math.sqrt(par).toFixed(1);
console.log(result(num)); */

// 3.4
/* let num = 3.55;
let result = (num) => (num ** 3).toFixed(2);
console.log(result(num)); */

// 3.5
/* let string = "apple";
let info = (par) => alert(par);
info(string); */

// 3.6
/* let exponentiation = (num1, num2) => alert(num1 ** num2);
exponentiation(3, 2); */

// 3.7
/* let isEven = (num) => {
  if (num % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isEven(8); */

// 3.8
/* let word = (word, num) => word.slice(0, num);
console.log(word("apple", 4)); */

// 3.9
/* let userAddress = prompt("შეიყვანე თქვენი მისამართი");
let add = document.getElementById("my-address");

let addAdress = (addr) => {
  let paragraph = document.createElement("h2");
  paragraph.textContent = addr;
  add.appendChild(paragraph);
};

addAdress(userAddress); */

// 3.10
/* let round = (num1, num2) => {
  let result = num1 * num2;
  let ones = Math.round(result / 10);
  let tens = Math.round(result / 10) * 10;
  let hundreds = Math.round(result / 10) * 100;
  console.log(`${ones} ${tens} ${hundreds}`);
};

round(10, 8);
 */

// 3.11
/* let html = "htmlservice";
let cut = (html) => html.replaceAll("html", "");
console.log(cut(html)); */

// 3.12
let squared = (num) => num ** 2;
console.log(squared(5));
