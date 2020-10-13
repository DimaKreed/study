//1
function SumOfNumsDivivision5From20To45() {
 let sum=0;
  for(let i=20;i<=45;i++)
  {sum+=(i%5===0)?i:0}
  return sum;
}
let first=document.getElementById('1');
first.innerText='1.sum of numbers from 20 to 45 which divides on 5 fully: '+SumOfNumsDivivision5From20To45();

//2
 function deleteVowels(str) {
   let vowels=[ 'a', 'e', 'i', 'o', 'u','y'];

   let arr=str.split('');

   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < vowels.length; j++) {
       if (arr[i]===vowels[j]) arr[i]='';
     }
   }

    return arr.join('');
 }
 let second=document.getElementById('2');
 second.innerText='2. string: "Lorem ipsum dolor sit amet, consectetur." New string:'+deleteVowels("Lorem ipsum dolor sit amet, consectetur.");

//3
function howMuchTimeToDate(date) {
  let diff = Math.floor( date.getTime()-  (new Date()).getTime());
  let day = 1000 * 60 * 60 * 24;

  let days = Math.floor(diff/day);
  let months = Math.floor(days/31);
  let years = Math.floor(months/12);

  let message = date.toDateString();
  message += " will be at  "
  message += days%365%30 + " days "
  message += months%12 + " months "
  message += years +'years' ;

  return message
}

let third=document.getElementById('3');
third.innerText='3.'+howMuchTimeToDate(new Date(2022,2,3));
//4
function itsOwnCode()
{
    alert("(" + arguments.callee.toString() + ")()");
}


//5
function divideString(str)
{
  return str.split(' ');
}

let fifth=document.getElementById('5');
fifth.innerText=`5.String: "HI! I search info". Divided string [${divideString("HI! I search info")}]`;