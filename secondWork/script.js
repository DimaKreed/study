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

//Розрахувати колір сигналу світлофора. 
// Опис: Робота світлофора запрограмована таким чином: з початку кожної години, 
// протягом трьох хвилин горить зелений сигнал, наступні дві хвилини горить червоний, 
// далі в перебігу трьох хвилин - зелений і т. д. Вам потрібно розробити програму, 
// яка по введеному числу визначала якого кольору зараз горить сигнал?
 function colorOfTrafficLights(minutes) {
    return (minutes%5>2)?'red':'green';
 }

//Дано текст і "слово", виділити червоним слова в тексті які містять в собі "слово".
// Наприклад: Дано слово "майстр" і текст "MasterWebs - Форум веб-майстрів"
function makeFindedTextRed() {
  let input=document.getElementById('input').value ;
  let text=document.getElementById('text');
  console.log(text.innerHTML)
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
  console.log(i+'d');


  document.write('<br><a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(i) + '" download="text.txt">Кількість оновлень сторінки.txt</a>')
}
//Реалізувати шифрування тексту шляхом заміни букв один одним (напр. A => B, B => X, і т.д).
// Кожна літера може представляти тільки одну іншу літеру.
// Написати три функції - перша генерує ключ у вигляді нового алфавіту.
// Друга шифрує заданий текст по заданому ключу.
// Третя розшифровує заданий зашифрований текст по заданому ключу.


function makeRandomArr(a, b) {
  return Math.random() - 0.5;
}

function randomKeyAlphabet(arr_en){
  let arr_en_random=JSON.parse(JSON.stringify(arr_en)).sort(makeRandomArr);
  return arr_en_random;
}

function cryptString(arr_en,string){
  let arr_en_random=randomKeyAlphabet(arr_en);

  let changedString=[];

  for (let i = 0; i < arr_en.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[j].toLowerCase() === arr_en[i]) {
        changedString[j] = arr_en_random[i];
      }
      if(string[j]===' ')changedString[j]=' ';
    }
  }
 changedString=changedString.join('');
 console.log('string crypted: '+changedString);
  return [changedString,arr_en,arr_en_random];
}

function decryptString(changedString,arr_en,arr_en_random){

let decryptedString=[];
  for (let i = 0; i < arr_en.length; i++) {
    for (let j = 0; j < changedString.length; j++) {
      if (changedString[j].toLowerCase() === arr_en_random[i]) {
        decryptedString[j] = arr_en[i];
      }
      if(changedString[j]===' ')decryptedString[j]=' ';
    }
  }
  decryptedString=decryptedString.join('');
  console.log('string decrypted: '+decryptedString);
 // return [changedString,arr_en,arr_en_random];
}

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let [changedString,,arr_en_random]=cryptString(arr_en,'hi i am Dima');
decryptString(changedString,arr_en,arr_en_random);