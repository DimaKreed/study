function createDOM(tag,attribute,arrayOfChilds){
  const mainElement=document.createElement(tag);
  if(typeof attribute==='object')
  {
    for (const attr in attribute) {
      (attr==='innerText')?mainElement.innerText=attribute[attr]:
        (attr==='innerHTML')?mainElement.innerHTML=attribute[attr]:
          (attr==='textContent')?mainElement.textContent=attribute[attr]:
            mainElement.setAttribute(attr,attribute[attr])
    }
  }

  if(Array.isArray(arrayOfChilds)){
    for (const child of arrayOfChilds) {
      mainElement.appendChild(child);
    }
  }
   return mainElement;
}

let view = createDOM('div', {id: 'header'}, [
  createDOM('div', {textContent: 'Привіт!'}),
  createDOM('div', {textContent: ' Базовий приклад SPA без використання сторонніх бібліотек.'}),
  createDOM('a', {href: '#', innerText: 'Перейти на привітання'}),
  createDOM('br'),
  createDOM('a', {href: '#', textContent: 'Перейти назад'})
])
console.log(view);

function checkEmail() {
  const divElement=document.getElementById('emailDiv');

  const email=document.getElementById('email');
const p=document.getElementById('invalidEmail');


if(!email.checkValidity())
  p.style.visibility='visible';
else p.style.visibility='hidden';
}

function checkPassword() {
  const divElement=document.getElementById('passwordDiv');

  const email=document.getElementById('password');
  const p=document.getElementById('invalidPassword');


  if(!email.checkValidity()||email.value.length<8)
    p.style.visibility='visible';
  else p.style.visibility='hidden';
}

function submit() {
  const form=document.forms.loginForm;
  const email=form.email;
  const password=form.password;

  console.log({
      email:email.value,
      password:password.value
    });




}