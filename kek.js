// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)
// console.log(document.body.lastChild.)


// let elem = document.getElementById('num')//берет id = num
// elem.style.color = 'red'; // красит этот элемент в красный
// console.log(elem)


// let elem = document.getElementById('num')//берет id = num
// elem.previousElementSibling.style.color = 'red'; // красит элемент до него в красный
// console.log(elem)


// let elem = document.querySelectorAll('li')
// console.log(elem)




// let elems = document.querySelectorAll('.item')
// for (let elem of elems){
//     console.log(elem)
// }



// let elem2 = document.querySelector('.list')
// console.log(elem2.children)



// let elem2 = document.querySelector('.list')
// elem2.firstElementChild.style.color = 'blue'
// console.log(elem2.firstElementChild)



// 1 Вариант
// let elem = document.querySelector('.list') // все листы
// let item = elem.querySelector('#num') // из листов ищем по id
// console.log(item)
// 2 вариант
// let elem = document.querySelector('.list #num') // все листы
// console.log(elem)


// let elem = document.getElementsByClassName('list') // по имени класса
// console.log(elem)


// let elem = document.getElementById('num'); // ищем по id
// elem.innerHTML = 'Numbers' // меняем то что было под id 'num на 'Numbers'
// console.log(elem.innerHTML)


// let elem = document.getElementById('num'); // ищем по id
// elem.style.color = 'red'; // красим
// elem.innerHTML = '<h1>Numbers</h2>'; // меняем то что было под id 'num на 'Numbers'
// console.log(elem.innerHTML)


// outerHTML
// let item = document.querySelector('.item4')
// item.outerHTML = '<h4>New text</h4>'
// console.log(item)


// console.log(document.body.firstChild)// выводим коммент Привет



// let item = document.querySelector('.item')
// item.innerHTML = document.body.firstChild.data;
// console.log(document.body.firstChild.data)

// let elem = document.querySelector('p')
// setTimeout(() => elem.hidden =false, 1500);


// let elem = document.querySelector('.alert')
// setTimeout(() => elem.hidden = false, 5000)


// let newElem = document.createElement('div') // создаем элемент
// newElem.innerHTML = '<strong>Hello</strong> I love Python' // пишем в созданный эелемент
// // document.body.append(newElem) // добавляем в body ( в конец) наш эелемент
// document.body.querySelector('ul').append(newElem) // добавляем в ul ( в конец) наш эелемент
// console.log(newElem)\

// let elem = document.querySelector('p')
// elem.remove()

// document.querySelector('ul').insertAdjacentHTML('fdvsd',
// `    <div class="alert">
//         <strong>Hello</strong> I love JavaScript
//     </div>
// `
// )



// let item2 = document.querySelector('ul');
// document.querySelector('h1').after(item2)   // меняют местами


// let item = document.querySelector('ul').cloneNode(true)
// console.log(item)
// item.style.background = 'yellow'
// document.querySelector('h1').after(item)
// let elem = document.querySelector('p').nextElementSibling
// elem.style.cssText = `
//                     position: absolute;
//                     padding: 15px;
//                     left: 40%;
//                     border: 1px solid #123455;
//                     border-radius: 4px;
//                     `

// let elem2 = document.querySelector('.alert')
// // console.log(elem2.className)
// setTimeout(() => elem2.classList.add('new'), 2000)                    




// let elem2 = document.querySelector('.alert')
// let size = getComputedStyle(elem2, '::before').fontSize
// console.log(parseInt(size))
// size = parseInt(size)
// elem2.style.marginTop = size*10 + 'px'



// let link = document.querySelector('.link');
// let input = document.querySelector('.input');
// input.value = 'Vasya'
// console.log(link.href)


// let elem = document.createElement('input');

// elem.setAttribute('class','alert')
// elem.setAttribute('placeholder', 'age')
// elem.setAttribute('name', 'age')
// document.querySelector('.alert').before(elem)
// console.log(elem)
// console.log(elem.getAttribute('name'))

// elem.removeAttribute('placeholder')
// console.log(elem)
// console.log(elem.hasAttribute('placeholder')) // проверка на наличие


let users = [
    {id:1 ,name: "Vasya", surname: 'Ivanov', grade: '5B'},
    {id:2 ,name: "Pasya", surname: 'Ivanov', grade: '5B'},
    {id:3 ,name: "Sasha", surname: 'Ivanov', grade: '5B'},
    {id:4 ,name: "Vaska", surname: 'Ivanov', grade: '5B'},
    {id:5 ,name: "nyJa", surname: 'Ivanov', grade: '5B'},
    {id:6 ,name: "Vasya", surname: 'Ivanov', grade: '5B'},
    {id:7 ,name: "Pasya", surname: 'Ivanov', grade: '5B'},
    {id:8 ,name: "Sasha", surname: 'Ivanov', grade: '5B'},
    {id:9 ,name: "Vaska", surname: 'Ivanov', grade: '5B'},
    {id:10 ,name: "nyJa", surname: 'Ivanov', grade: '5B'},
]


// Выигрышные id
let fins_arr = [2, 5 ,6]

// Таймер
let number = 0;
let timeInfo = document.querySelector('.time')
function increaseNumber() {
  number += 1;
  if (number >=5){
    clearInterval(time)
  }
  timeInfo.innerHTML = number
//   elem.insertAdjacentHTML('afterend',`<p>${number}</p>`)
} 
let time = setInterval(increaseNumber, 1000);
//

// вывод на экран
let elem = document.querySelector('.list')
for (let user of users){
    elem.insertAdjacentHTML('beforeend',
    `
<div class="card" id="${user.id}" onclick='hello("${user.id}")'>
    <h1 class="name">${user.name}</h1>
    <p class="surname">${user.surname}</p>
    <p class="grade">${user.grade}</p>
    </div>
    
    `
    )
}




// let a = setTimeout(() => a = false, 5000);


// проверка на правильное нажатие и конец времени
function hello(id){
    if (number < 5){    
        if (fins_arr[0] == id){
        console.log('Win')
        } else if (fins_arr[1] == id){
            console.log('Win')
        } else if (fins_arr[2] == id){
            console.log('Win')
        } else {
            document.getElementById(id).hidden = true;
        }
    } else {
        console.log("Время кончилось")
        
    }
}




// function hello(id){
//     for(let i of fins_arr){
//     if (fins_arr[i] == id ){
//         console.log('Win')
//     } else {
//         console.log(i)
//     }
//     }
// }    


// function hello(id){
//     console.log(id)
//     // document.getElementById(id).hidden = true; // скрываем со страницы данные(но не удаляем)
// }
