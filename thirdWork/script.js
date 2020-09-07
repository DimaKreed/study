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
  document.body.appendChild(table);
  document.body.appendChild(document.createElement('br'));

}
}

// let t=new multiplicationTable(6);
// t.calculate();
//
// let t1=new multiplicationTable(2);
// t1.calculate();

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
document.body.appendChild(table)

//3.	Створіть клас користувача, з полями: прізвище, ім'я, вік і e-mail.