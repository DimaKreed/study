//Створити масив обєктів типу `{ firstName: ‘Jon’, lastName: ‘snow’ ratting: 100 }` для всі
// одногрупників (оцінки взяти із попереднього курсу чи семестру за певний
// предмет) та написати методи для можливості:
//
// Вивести імена та прізвища одногрупників по алфавіту;
//

let students=[
  {name:'Kolia',surname:'Breznitskyi',rating:[80,90,80]},
  {name:'Dmytro',surname:'Varchuk',rating:[100,90,80]},
  {surname:'Voznyi',name:'Oleh',rating:[75,90,85]},
  {surname:'Vonsovych',name:'Nazar',rating:[60,70,70]},
  {surname:'Glynskyi',name:'Borys',rating:[100,95,90]},
  {surname:'Grymailo',name:'Sasha',rating:[75,70,80]},
  {surname:'Zhmurko',name:'Andriy',rating:[70,70,74]},
  {surname:'Kovalets',name:'Andriy',rating:[95,97,98]},
  {surname:'Kolachnyk',name:'Rostyslav',rating:[85,86,87]},
  {surname:'Kuryvchak',name:'Dmytro',rating:[61,62,63]},
  {surname:'Marhotskyi',name:'Nazar',rating:[63,66,75]},
  {surname:'Motorina',name:'Tetiana',rating:[82,82,85]},
  {surname:'Nagorna',name:'Daria',rating:[81,88,62]},
  {surname:'Pashchak',name:'Rostyslav',rating:[60,61,62]},
  {surname:'Povoroznyk',name:'Bogdan',rating:[85,86,78]},
  {surname:'Pomazova',name:'Ninel',rating:[95,97,99]},
  {surname:'Romaniuk',name:'Roman',rating:[67,66,62]},
  {surname:'Skotnitskyi',name:'Vova',rating:[61,62,66]},
  {surname:'Slobodian',name:'Vitaliy',rating:[80,82,83]},
  {surname:'Solovey',name:'Maksym',rating:[60,60,60]},
  {surname:'Stetsevych',name:'Viktorianna',rating:[82,88,91]},
  {surname:'Trygub',name:'Yarik',rating:[100,90,98]},
  {surname:'Turchun',name:'Olezhyk',rating:[100,100,99.5]},
  {surname:'Khayetskyi',name:'Max',rating:[60,60,60]},
  {surname:'Sherstiuk',name:'Yura',rating:[80,81,88]},
  {surname:'Shostopal',name:'Viktor',rating:[65,66,65]},
  {surname:'Shtogryn',name:'Max',rating:[67,66,71]}
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