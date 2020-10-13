//Створити масив обєктів типу `{ firstName: ‘Jon’, lastName: ‘snow’ ratting: 100 }` для всі
// одногрупників (оцінки взяти із попереднього курсу чи семестру за певний
// предмет) та написати методи для можливості:
//
// Вивести імена та прізвища одногрупників по алфавіту;
//

let students=[
  {name:'Kolia',surname:'Breznitskyi',rating:[80,90,80]},
  {name:'Dmytro',surname:'Varchuk',rating:[100,90,80]},
  {name:'Voznyi',surname:'Oleh',rating:[75,90,85]},
  {name:'Vonsovych',surname:'Nazar',rating:[60,70,70]},
  {name:'Glynskyi',surname:'Borys',rating:[100,95,90]},
  {name:'Grymailo',surname:'Sasha',rating:[75,70,80]},
  {name:'Zhmurko',surname:'Andriy',rating:[70,70,74]},
  {name:'Kovalets',surname:'Andriy',rating:[95,97,98]},
  {name:'Kolachnyk',surname:'Rostyslav',rating:[85,86,87]},
  {name:'Kuryvchak',surname:'Dmytro',rating:[61,62,63]},
  {name:'Marhotskyi',surname:'Nazar',rating:[63,66,75]},
  {name:'Motorina',surname:'Tetiana',rating:[82,82,85]},
  {name:'Nagorna',surname:'Daria',rating:[81,88,62]},
  {name:'Pashchak',surname:'Rostyslav',rating:[60,61,62]},
  {name:'Povoroznyk',surname:'Bogdan',rating:[85,86,78]},
  {name:'Pomazova',surname:'Ninel',rating:[95,97,99]},
  {name:'Romaniuk',surname:'Roman',rating:[67,66,62]},
  {name:'Skotnitskyi',surname:'Vova',rating:[61,62,66]},
  {name:'Slobodian',surname:'Vitaliy',rating:[80,82,83]},
  {name:'Solovey',surname:'Maksym',rating:[60,60,60]},
  {name:'Stetsevych',surname:'Viktorianna',rating:[82,88,91]},
  {name:'Trygub',surname:'Yarik',rating:[100,90,98]},
  {name:'Turchun',surname:'Olezhyk',rating:[100,100,99.5]},
  {name:'Khayetskyi',surname:'Max',rating:[60,60,60]},
  {name:'Sherstiuk',surname:'Yura',rating:[80,81,88]},
  {name:'Shostopal',surname:'Viktor',rating:[65,66,65]},
  {name:'Shtogryn',surname:'Max',rating:[67,66,71]}
]

function sortByAlphabet(students)
{

 let sortedStudents=students.sort((a, b) => {return (a.name>b.name)?1:-1; return 0;});
  console.log(sortedStudents);
}

sortByAlphabet(students);

// Вивести імена та прізвища за оцінками
function logByRating(students) {
   let sortedStudents=JSON.parse(JSON.stringify(students));
    sortedStudents.forEach(value =>value.avgRating=(value.rating.reduce((a,b)=>a+b)/value.rating.length));
    sortedStudents.sort((a, b) => b.avgRating-a.avgRating);
    console.log(sortedStudents);
    return sortedStudents;
}
logByRating(students);

// Вивести ім’я та прізвище учня із максимальною мінімальною та середньою оцінками.
function logByMaxMinAvgRate(students) {
let sortedStudents=JSON.parse(JSON.stringify(logByRating(students)));
console.log('Student with max rating '+sortedStudents[0].name+' '+sortedStudents[0].surname+' '+sortedStudents[0].rating);
  console.log('Student with min rating '+sortedStudents[sortedStudents.length-1].name+' '+sortedStudents[sortedStudents.length-1].surname+' '+sortedStudents[sortedStudents.length-1].rating);
  console.log('Student with average rating '+sortedStudents[Math.round(sortedStudents.length/2)].name+' '+sortedStudents[Math.round(sortedStudents.length/2)].surname+' '+sortedStudents[Math.round(sortedStudents.length/2)].rating);
}
logByMaxMinAvgRate(students);

//Створити новий масив на основі старого в якому буде додаткове поле {
// rate: 100 } де rate на скільки відсотків учень відстав від лідера (найбільше
// значення поля ratting);
let copiedStudents=JSON.parse(JSON.stringify(students));
copiedStudents.forEach(value=>
{
  value.avgRating=(value.rating.reduce((a,b)=>a+b)/value.rating.length);
});

copiedStudents.sort((a, b) => b.avgRating-a.avgRating);
copiedStudents.forEach(value=> value.rate=100-(value.avgRating/copiedStudents[0].avgRating)*100);
console.log(copiedStudents);

//* Створити метод який генерує рандомну строку пароль. Враховуючи
// можливість задати довжину, наявність чисел та символів.
  function createPassword(passwordLength=10,isNumbers=false,isSymbols=false) {
  let letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let length=letters.length;
  for (let i = 0; i < length; i++) {
    letters.push(letters[i].toUpperCase());
  }
  const symbols=["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
  const numbers=['1','2','3','4','5','6','7','8','9','0']

  if(isNumbers) letters=letters.concat(numbers);
  if(isSymbols) letters=letters.concat(symbols);

  letters.sort((a, b) => Math.random()-0.5);

    let password='';
    for (let i = 0; i < passwordLength; i++)
    {
      password+=letters[i];
    }
  return password;



}

console.log(createPassword());
console.log(createPassword(15,true));
console.log(createPassword(20,true,true));