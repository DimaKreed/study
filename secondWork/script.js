//Дано натуральне число n. Визначити: скільки цифр в числі n, чому дорівнює сума його цифр.
function numOfDigitsAndSum(num) {
  let sum=0;
  let numOfDigits=0
    for(let i = 0; num > 1; i++) {
      sum+=Math.floor(num%10);
      num /= 10;
      numOfDigits++;
    }
    return [numOfDigits,sum];
}
let first=document.getElementById('1');
first.innerText='1. 121231231 numOfDigits: '+numOfDigitsAndSum(121231231)[0]+' sumOfDigits: '+numOfDigitsAndSum(121231231)[1];
//Розрахувати колір сигналу світлофора. 
// Опис: Робота світлофора запрограмована таким чином: з початку кожної години, 
// протягом трьох хвилин горить зелений сигнал, наступні дві хвилини горить червоний, 
// далі в перебігу трьох хвилин - зелений і т. д. Вам потрібно розробити програму, 
// яка по введеному числу визначала якого кольору зараз горить сигнал?
 function colorOfTrafficLights(minutes) {
    return (minutes%5>2)?'red':'green';
 }
 let second=document.getElementById('2');
 second.innerText='2.  55min:'+ colorOfTrafficLights(55)+ ' 23min:' + colorOfTrafficLights(23);

//Дано текст і "слово", виділити червоним слова в тексті які містять в собі "слово".
// Наприклад: Дано слово "майстр" і текст "MasterWebs - Форум веб-майстрів"
function makeFindedTextRed() {
  let input=document.getElementById('input').value ;
  let text=document.getElementById('text');
  text.innerHTML=text.innerHTML.replace(`${input}`,`<span>${input}</span>`);
}
//Написати лічильник відкриття для однієї сторінки.
// Кількість відкриттів сторінки зберігається в txt-файлі у вигляді числа.
// Після кожного 10 відкриття сторінки, виводити вітальне повідомлення на екран.
function refreshPage10Times(){
  let d=new Date().getTime();
  let a=document.URL;
  let c=window.name
  let N_max = 10 //Кількість обнов
  let TimeMin = 600000;//час дії
  let d0=d;
  let i=0;
  if(c!=''){let arr=c.split(",");

    if(arr.length==4&&arr[2]==a){i=parseInt(arr[3])+1;}
    else window.name=(d+","+d0+","+a+","+1);
  }  else window.name=(d+","+d0+","+a+","+1);
  if(i>1){d0=parseInt(window.name.split(",")[1])}
  if(isNaN(i)||isNaN(d0)){i=1;d0=d;}
  if( i >=N_max){
    if(d-d0<= (TimeMin/N_max)*i){alert('Привіт користувач, ти обновив сторінку 10 раз');window.name='';}
    window.name='';d0=d;i=1;
  }
  window.name=(d+","+d0+","+a+","+i);

let fourth=document.getElementById('4');
  fourth.innerHTML+='<br><a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(i) + '" download="text.txt">Кількість оновлень сторінки.txt</a>';
}
refreshPage10Times();

z

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let [changedString,,arr_en_random]=cryptString(arr_en,'hi i am Dima');
let decryptedString=decryptString(changedString,arr_en,arr_en_random);
let fifth=document.getElementById('5');
fifth.innerText=`5. My string is 'hi i am dima'. Crypted string is '${changedString}'. Decrypted string is '${decryptedString}'`;