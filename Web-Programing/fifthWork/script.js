//Вивести таблицю, в якій числа розташовуються по спіралі.

createTable = function (cols, rows) {
  let table = document.createElement("table"), x, y, tr, td;

  for (let x = 0; x < cols; x++) {
    tr = document.createElement("tr");

    for (let y = 0; y < rows; y++) {
      td = document.createElement("td");
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  return table;
}


function circus( rotate, repeat, startNum ) {
  let
    direct = 0,                     /* напрямок змії */
    rowcols = repeat * 2 + 1,       /* довжина сторони таблиці */
    limit = Math.pow( rowcols, 2 ), /* кількість чисел для заповнення таблиці */
    table = createTable( rowcols, rowcols )
  nowCell = [ (rowcols - 1) / 2 , (rowcols - 1) / 2 ], /* середина таблиці */
    nowNum = -1,
    addNum = 0;

  rotate =   rotate || 1;
  startNum = startNum || 0;

  while ( ++nowNum + startNum < limit + startNum ) {

    if (direct > 3) direct = 0;
    if (direct < 0) direct = 3;

    table.rows[ nowCell[0] ].cells[ nowCell[1] ].innerHTML = nowNum + startNum;
    if  ( direct === 0 || direct === 2 ) { // рух по вертикалі
      addNum = direct === 0 ? rotate : -rotate
      if ( !table.rows[ nowCell[0] ].cells[ nowCell[1] + addNum ].innerHTML) {
        nowCell[1] += addNum;
        direct += rotate;
      } else {
        nowCell[0] -= addNum * rotate;
      }
    } else { // рух по горизонталі
      addNum = direct === 1 ? rotate : -rotate
      if ( !table.rows[ nowCell[0] + addNum].cells[ nowCell[1] ].innerHTML) {
        nowCell[0] += addNum;
        direct += rotate;
      } else {
        nowCell[1] += addNum * rotate;
      }
    }
  }
  return table

}
let divForFirstTask=document.getElementById('firstTask');
let table = circus(-1, 4, 0)
divForFirstTask.appendChild(table);

//Створити код JavaScript "розрахунок прямокутника",
// який за шириною та довжиною прямокутника обчислює його периметр,
// площу та довжину діагоналі.


function calculate()
{
  let form=document.forms.form;
  let width=+form.width.value||0;
  let height=+form.height.value||0;

  let p=form.p;
  p.value=(width+height)*2;
  let s=form.s;
  s.value=width*height;
  let d=form.d;
  d.value=Math.sqrt(Math.pow(width,2)+Math.pow(height,2));
}

//Напишіть функцію для створення таблиці розміром NхM.
// Такий, щоб кожна клітинка заповнювалася випадкової буквою українського алфавіту і випадковим кольором фону (для виконання завдання, скористайтеся методом random() об'єкта Math;
// крім того створіть масив з елементами - літерами алфавіту)
let tableTaskThree=createTable(Math.random()*10+1,Math.random()*10+1);
let letters=['А','Б','В',	'Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я'];
let td=tableTaskThree.getElementsByTagName("td");
for (const tdElement of td) {
  tdElement.style.backgroundColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  tdElement.innerText=`${letters[Math.round( -0.5 + Math.random() * (letters.length))]}`;
}

document.getElementById('thirdTask').appendChild(tableTaskThree);