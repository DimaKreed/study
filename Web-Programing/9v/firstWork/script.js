//1 Обчислити значення виразу
function calculateTask(a) {
  return (Math.tan(Math.sin(a))+Math.sin(Math.tan(a)))/(a*a*Math.pow(Math.E,2.0));
}
let first=document.getElementById('1');
first.innerText='1.  '+calculateTask(1.19);


//2
function isPalindrom(num) {
 return String(num)===String(num).split('').reverse().join('');
}
let second=document.getElementById('2');
second.innerText='2. 1234321: '+isPalindrom(1234321)+'  789:'+isPalindrom(789) ;
//3
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]>arr[i-1]) return false;
  }
  return true
}
let third=document.getElementById('3');
third.innerText='3. [1,3,34,45,56,76,7,76,66,7009888,-67676,76756,4,4,3,33,]: '+isSorted([1,3,34,45,56,76,7,76,66,7009888,-67676,76756,4,4,3,33,])
//4
function maxElemInEachRow(arr) {
  let arrOfMaxElems=[];
  for (let i = 0; i < arr.length; i++) {
    arrOfMaxElems.push(Math.max(...arr[i]));
  }
  return arrOfMaxElems;
}
let fourth=document.getElementById('4');
fourth.innerText='4. [[1,2,3,4,5],[2,3,4,5,6],[7,8,6,2,1],[0,1,2,3,4],[3,-1,-2,-3,-5]]: '+maxElemInEachRow([[1,2,3,4,5],[2,3,4,5,6],[7,8,6,2,1],[0,1,2,3,4],[3,-1,-2,-3,-5]]);

//5
function subtractionsOfPositiveNums(arr1, arr2) {
  let sum1=0;
  let sum2=0;
  arr1.forEach(value=>{if(value>0)sum1+=value});
  arr2.forEach(value=>{if(value>0)sum2+=value});
  return sum1-sum2;
}
let fifth=document.getElementById('5');
fifth.innerText='5. A[1,2,-5,-6] B[7,2,-44,-6] subtraction:'+subtractionsOfPositiveNums([1,2,-5,-6],[7,2,-44,-6])


//6
function lettersBoforeF(str) {
    let arr=str.split('');
    let str1='';
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]==='f') break;
    else str1+=arr[i];
  }
  return str1;

}
let sixth=document.getElementById('6');
sixth.innerText='6. text is: "lorem ipsum dolor sit f amet". Text before F:'+lettersBoforeF("lorem ipsum dolor sit f amet");




