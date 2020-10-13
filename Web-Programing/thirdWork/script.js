//1.	Створіть клас для виведення таблиці множення для вказаного числа (передавати в конструкторі).
// Створити окремий метод для обчислення.
// Далі створити кілька об'єктів даного класу для демонстрації працездатності класу.
// Висновок оформити у вигляді таблиці.
class multiplicationTable{
constructor(number){
  this.number=number;
}
calculate(){

  let table, row, cell, i, j;
  table = document.createElement('table');
  table.style.textAlign = 'right';
  table.style.fontFamily = 'monospace';
  for (let i=1; i<=10; i++) {
    row = document.createElement('tr');
    if(i===this.number)row.style.backgroundColor='blue';

    for (let j=1; j<=10; j++) {
      cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
      cell.appendChild(document.createTextNode(i*j));
      cell.style.padding = '4px';
      cell.style.width = 100 / 9 + '%';
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  let multi=document.getElementById(`multi`);

 multi.appendChild(table);
  multi.appendChild(document.createElement('br'));

}
}

let t=new multiplicationTable(6);
t.calculate();

let t1=new multiplicationTable(2);
t1.calculate();

//2.	Створіть клас країни в якому будуть поля:
// назва країни, населення і назва столиці (англійські назви придумайте самостійно).
// Створіть масив об'єктів, виведіть кожний з них у таблицю в три рядки по дві комірки в кожному.
// У лівій комірці ім'я елемента, в правій - його значення.

class Country {
  constructor(nameOfCountry,population,capital) {
  this.nameOfCountry=nameOfCountry;
  this.population=population;
  this.capital=capital;
  }
}
let arrOfCountries=[new Country('ukraine',44.5,'kyiv'),new Country('poland',22.5,'warshawa'),new Country('belorus',25,'minsk'),new Country('russia',100,'moskow')]
const table=document.createElement("table");

const tr1=document.createElement("tr");
const td1=document.createElement("td");
td1.innerHTML='<td>Country</td>';
td1.classList.add('orange');
tr1.append(td1);

const tr2=document.createElement("tr");
const td2=document.createElement("td");
td2.innerHTML='<td>Population</td>';
td2.classList.add('orange');
tr2.append(td2);

const tr3=document.createElement("tr");
const td3=document.createElement("td");
td3.innerHTML='<td>Capital</td>';
td3.classList.add('orange');
tr3.append(td3);

for (const country of arrOfCountries) {
  let td_1=document.createElement("td");
  td_1.innerText=`${country.nameOfCountry}`
  tr1.append(td_1);

  let td_2=document.createElement("td");
  td_2.innerText=`${country.population}`
  tr2.append(td_2);

  let td_3=document.createElement("td");
  td_3.innerText=`${country.capital}`
  tr3.append(td_3);
}
table.appendChild(tr1);table.appendChild(tr2);table.appendChild(tr3);
let divForTable=document.getElementById('table');
divForTable.appendChild(table);
divForTable.appendChild(document.createElement("br"));

//3.	Створіть клас користувача, з полями: прізвище, ім'я, вік і e-mail.
//4.	У HTML формі користувач вводить в чотири різні поля: прізвище, ім'я, вік і e-mail.
// Після натискання клавіші кнопки ГОТОВО створюється об'єкт користувача, з методом,
// який вносить ці дані в поле об'єкту і далі виводить їх використовуючи другий метод класу користувача.
//5.	У формі передбачити перевірку, що всі поля перед відправленням не порожні.
class User {
  constructor(name,surname,age,eMail) {
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.eMail=eMail;
  }

  writeUserInfo(){
    console.log(`Name:${this.name}, Surname:${this.surname},Age:${this.age},E-mail:${this.eMail}`);
  }
}

function validateForm() {
  if (document.forms["myForm"]["name"].value === ''
  ||document.forms["myForm"]["surname"].value===''
  ||document.forms["myForm"]["age"].value===''
    ||document.forms["myForm"]["eMail"].value==='') {
    alert("Fields must be filled out");
    return false;
  }
}


function createObj(){
  let user=new User(document.forms.myForm.name.value,
    document.forms.myForm.surname.value,
    document.forms.myForm.age.value,
    document.forms.myForm.eMail.value);

  user.writeUserInfo()

}

//6.	Створити клас калькулятор (Calc).
// В клас включити методи, що реалізують всі арифметичні дії
// (додавання, віднімання, ділення, ділення по модулю, добування кореня, піднесення до степеня).
// У кожному методі передбачити перевірку допустимості аргументів.
// Якщо аргумент виходить за рамки допустимих значень - видати відповідне повідомлення.

class Calculator {
  constructor() {
  }
  validate(num1,num2=0)
  {
   return (
     (typeof num1) ==='number'
      && (typeof num2) ==='number'
      && num1 < 10000
     && num1 > -10000
     && num2 < 10000
     && num2 > -10000);
  }
  add(num1,num2){
   if (this.validate(num1,num2))
   {return num1+num2}
   else {console.log('numbers not confirmed validation');}
  }
  subtract(num1,num2){
    if (this.validate(num1,num2))
    {return num1-num2}
    else {console.log('numbers not confirmed validation');}
  }

  multiply(num1,num2){
    if (this.validate(num1,num2))
    {return num1*num2}
    else {console.log('numbers not confirmed validation');}
  }
  divide(num1,num2){
    if (this.validate(num1,num2))
    {return num1/num2}
    else {console.log('numbers not confirmed validation');}
  }
  divideByModule(num1,num2){
    if (this.validate(num1,num2))
    {return num1%num2}
    else {console.log('numbers not confirmed validation');}
  }
  squareRoot(num1){
    if (this.validate(num1))
    {return Math.sqrt(num1)}
    else {console.log('number not confirmed validation');}
  }
  pow(num1,num2){
    if (this.validate(num1,num2))
    {return Math.pow(num1,num2)}
    else {console.log('numbers not confirmed validation');}
  }
}
//7.	Перевірити працездатність класу створивши об'єкт і,
// викликавши кожний з його методів з довільними аргументами.
let calculator=new Calculator;
console.log(`add 3&5: ${calculator.add(3,5)}`);
console.log(`divide 3&5: ${calculator.divide(3,5)}`);
console.log(`divideByModule 8&5: ${calculator.divideByModule(8,5)}`);
console.log(`multiply 3&5: ${calculator.multiply(3,5)}`);
console.log(`pow 3&5: ${calculator.pow(3,5)}`);
console.log(`squareRoot 25: ${calculator.squareRoot(25)}`);
console.log(`subtract 9&12: ${calculator.subtract(9,12)}`);

//8.	Створити клас для виводу і обробки форми розрахунку (CalcDispatcher).
// Розхрахунок повинен здійснюватися усередині методу display ().
// Обробка введення форми повинна відбуватися усередині методу dispatch ().
// Передбачити перевірку на введення тільки чисел.
// Зв'яжіть класи Calc і CalcDispatcher ставленням агрегації,
// таким чином, що б вся логіка калькулятора відбувалася за допомогою об'єкту класу Calc.

class CalcDispatcher {
 calc=new Calculator();
  display(){
let sign =document.forms.calc.select.value;
let operation='error';
let num1=+document.forms.calc.num1.value;
let num2=+document.forms.calc.num2.value;
  if (sign==='+')  operation=this.calc.add(num1,num2);
  if (sign==='-')  operation=this.calc.subtract(num1,num2);
  if (sign==='*')  operation=this.calc.multiply(num1,num2);
  if (sign==='/')  operation=this.calc.divide(num1,num2);
  if (sign==='%')  operation=this.calc.divideByModule(num1,num2);
  if (sign==='^')  operation=this.calc.pow(num1,num2);
  if (sign==='√')  {operation=this.calc.squareRoot(num1); document.forms.calc.num2.value='';}

document.forms.calc.output.value=`${operation}`;
  }
}

function display() {
let calcDispatcher=new CalcDispatcher();
calcDispatcher.display();
}

//10.	Розробити гру «Хрестики нулики».
let winners = new Array();
let player1Selections = new Array();
let player2Selections = new Array();

let currentPlayer = 0;
let move = 0;
let points1 = 0;    // player 1 points
let points2 = 0;    // player 2 points
let size = 3;

function drawBoard() {
  let Parent = document.getElementById("game");
  let counter = 1;

  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild);
  }

  for (let s = 0; s < 3; s++) {
    let row = document.createElement("tr");

    for (let r = 0; r < 3; r++) {
      let col = document.createElement("td");
      col.id = counter;

      let handler = function(e) {
        if (currentPlayer == 0) {
          this.innerHTML = "X";
          player1Selections.push(parseInt(this.id));
          player1Selections.sort(function(a, b) { return a - b });
          d('player1').classList.remove('selected');
          d('player2').classList.add('selected');
        }

        else {
          this.innerHTML = "O";
          player2Selections.push(parseInt(this.id));
          player2Selections.sort(function(a, b) { return a - b });
          d('player1').classList.add('selected');
          d('player2').classList.remove('selected');
        }

        if (checkWinner())
        {
          if(currentPlayer === 0)
            points1++;
          else
            points2++;

          document.getElementById("player1").innerHTML = points1;
          document.getElementById("player2").innerHTML = points2;

          reset();
          drawBoard();
        }

        else if (player2Selections.length + player1Selections.length === 9)
        {
          reset();
          drawBoard();
        }
        else
        {
          if (currentPlayer === 0)
            currentPlayer = 1;
          else
            currentPlayer = 0;
          this.removeEventListener('click', arguments.callee);
        }
      };

      col.addEventListener('click', handler);

      row.appendChild(col);
      counter++;
    }

    Parent.appendChild(row);
  }

  loadAnswers();
}

function d(id)
{
  let el = document.getElementById(id);
  return el;
}
function reset()
{
  currentPlayer = 0;
  player1Selections = new Array();
  player2Selections = new Array();
  d('player1').classList.add('selected');
  d('player2').classList.remove('selected');
}

function loadAnswers()
{
  winners.push([1, 2, 3]);
  winners.push([4, 5, 6]);
  winners.push([7, 8, 9]);
  winners.push([1, 4, 7]);
  winners.push([2, 5, 8]);
  winners.push([3, 6, 9]);
  winners.push([1, 5, 9]);
  winners.push([3, 5, 7]);
}

function checkWinner() {
  // check if current player has a winning hand
  // only stsrt checking when player x has size number of selections
  let win = false;
  let playerSelections = new Array();

  if (currentPlayer == 0)
    playerSelections = player1Selections;
  else
    playerSelections = player2Selections;

  if (playerSelections.length >= size) {
    // check if any 'winners' are also in your selections

    for (let i = 0; i < winners.length; i++) {
      let sets = winners[i];  // winning hand
      let setFound = true;

      for (let r = 0; r < sets.length; r++) {
        // check if number is in current players hand
        // if not, break, not winner
        let found = false;

        // players hand
        for (let s = 0; s < playerSelections.length; s++) {
          if (sets[r] === playerSelections[s]) {
            found = true;
            break;
          }
        }

        // value not found in players hand
        // not a valid set, move on
        if (found == false) {
          setFound = false;
          break;
        }
      }

      if (setFound == true) {
        win = true;
        break;
      }
    }
  }

  return win;
}

window.addEventListener('load', drawBoard);