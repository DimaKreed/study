//Обчислити значення виразу
function calculateTask(a,x) {
  return answer=(Math.log(Math.pow(x,3.0))-x*Math.cos(x))/(a+Math.pow(x,2.0))
}
let first=document.getElementById('1');
first.innerText='1.  '+calculateTask(-9.86,0.56);
//Визначити, чи є задане натуральне число паліндромом,
// тобто таким, що його десятковий запис читається однаково
// зліва на право і справа наліво.
function isPalindrom(num) {
 return String(num)===String(num).split('').reverse().join('');
}
let second=document.getElementById('2');
second.innerText='2. 1234321: '+isPalindrom(1234321)+'  789:'+isPalindrom(789) ;
//Знайти найбільший елемент в одновимірному числовому масиві.
function maxElemInArray(arr) {
  return Math.max(...arr);
}
let third=document.getElementById('3');
third.innerText='3. [1,3,34,45,56,76,7,76,66,7009888,-67676,76756,4,4,3,33,]: '+maxElemInArray([1,3,34,45,56,76,7,76,66,7009888,-67676,76756,4,4,3,33,])
//Вивести на друк мінімальний елемент масиву FR та його індекси.
function minElemAndItsIndexInArray(arr) {
  return [Math.min(...arr),arr.indexOf(Math.min(...arr))];
}
let fourth=document.getElementById('4');
fourth.innerText='4. [1,3,34,45,56,76,7,76,66,7009888,-67676,76756,4,4,3,33,]: '+minElemAndItsIndexInArray([1,3,34,45,56,76,7,76,66,7009888,-67676,76756,4,4,3,33,])

//Знайти суму додатних елементів одновимірних масивів E та F
function sumOfPositiveNums(arr1,arr2) {
  let sum=0;
  arr1.forEach(value=>{if(value>0)sum+=value})
  arr2.forEach(value=>{if(value>0)sum+=value})
  return sum
}
let fifth=document.getElementById('5');
fifth.innerText='5. e[1,2,-5,6] f[7,2,-44,-6] sum:'+sumOfPositiveNums([1,2,-5,6],[7,2,-44,-6])


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
let sixth=document.getElementById('6');
sixth.innerText='6. str1(Dima pups) str2(Dimitrius zvir) n=3:'+isSomeWordsInStringEqual('Dima pups','Dimitrius zvir',3)
 + '\nstr1(Dima pups) str2(Dimitrius zvir) n=6:'+isSomeWordsInStringEqual('Dima pups','Dimitrius zvir',6)



