//Обчислити значення виразу
function calculateTask(a,x) {
  return answer=(Math.log(Math.pow(x,3.0))-x*Math.cos(x))/(a+Math.pow(x,2.0))
}
//Визначити, чи є задане натуральне число паліндромом,
// тобто таким, що його десятковий запис читається однаково
// зліва на право і справа наліво.
function isPalindrom(num) {
 return String(num)===String(num).split('').reverse().join('');
}

//Знайти найбільший елемент в одновимірному числовому масиві.
function maxElemInArray(arr) {
  return Math.max(...arr);
}
//Вивести на друк мінімальний елемент масиву FR та його індекси.
function minElemAndItsIndexInArray(arr) {

  return [Math.min(...arr),arr.indexOf(Math.min(...arr))];
}
//Знайти суму додатних елементів одновимірних масивів E та F
function sumOfPositiveNums(arr1,arr2) {
  let sum=0;
  arr1.forEach(value=>{if(value>0)sum+=value})
  arr2.forEach(value=>{if(value>0)sum+=value})
  return sum
}


//Дано два рядки.  Надрукувати результат рівності перших n символів.
function isSomeWordsInStringEqual(str1,str2,n) {
    let arr1=str1.split('');
    let arr2=str2.split('');
    let equal=true;
  console.log(arr1);
  for (let i = 0; i < n; i++) {
      arr1[i]===arr2[i]?equal=true:equal=false
  }
    return equal;
}

