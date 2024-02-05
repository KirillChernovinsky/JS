// уровень 1.10

//1
//
// let nums = [];
//
// const desiredArrayLength = 10;
//
// for (let i = 0; i < desiredArrayLength; i++) {
//   nums.push(Math.floor(Math.random() * 100) + 1);
// }
//
// console.log(nums);


// 2

// let nums = 12349
//
// let result = nums.toString()
// let result2 = result.split('')
// let result3 = result2.reverse()
// let result4 = result3.join('')
// console.log(parseInt((result4)))
//


// 3


//
// let arr = [1, 2, 3, 4, 5, 6];
//
// for (let i = 0; i < arr.length; i += 2) {
//     let subArr = arr.slice(i, i + 2);
//     console.log(subArr);
// }


// 4

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
//
// let result = arr1.concat((arr2))
// console.log(result)






// уровень 2.1
// 1
// let stroka = 'abg0p'
// for (let i = 0;i < stroka.length; i++){
//     if (parseInt(stroka[i]) === 0){
//         console.log(i)
//         break
//     } else {
//         continue
//     }
// }

// 2

// let num = 1000
//
//
// for (let i = 1;i < num;i++){
//     let str = i.toString()
//     // console.log(parseInt(str[0] + str[1]))
//     console.log(str)
//     if (parseInt(str[0] + str[1]) === 5){
//         console.log(str)
//     } else {
//         continue
//     }
// }


// 3


// let a = [5, 6, 7]
//
// let b = parseInt(prompt("Удалить элемент:"))
// for(let i = 0; i < a.length; i++){
//
//     // console.log(a[i])
//     if (a[i] === b){
//         a.splice(i,1)
//     } else {
//         continue
//     } console.log(a)
// }


// 4

// let arr = [1, 2, 3, 4, 5, 6]
//
// let res = 0
//
// for (let i = 0; i < arr.length/2; i++){
//     res += arr[i]
// }
// console.log(res)





// Уровень 3.1

//1

// let a = 321
// let n = a.toString()
//
// for(let i=0; i < n.length; i++){
//     if (parseInt(n[i]) > parseInt(n[i+1])){
//         console.log('Не по порядку')
//         break
//     } else {
//         continue
//     }
// }


// 2

// let arr = [1, '', 2, 3, '', 5]
//
// for (let i = 0; i<arr.length; i++){
//     if(arr[i] === ''){
//         arr.splice(i, 1)
//     } else {
//         continue
//     }
// }
// console.log(arr)


// 3

// let arr = [
//     [2, 1, 4, 3, 5],
//     [3, 5, 2, 4, 1],
//     [4, 3, 1, 5, 2],
// ]
//
// for (i = 0; i < arr.length; i++){
//     arr[i].sort((a,b) => a- b);
// }
// console.log(arr)

// 4

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
//
//
// for (let i=0; i < arr2.length; i++){
//     if (arr1.length < arr2.length){
//         arr2.pop()
//     } else {
//         continue
//     }
// }
//
// console.log(arr1)
// console.log(arr2)




// Уровень 4.1

//1

// let a = prompt('День недели цифрой:')
// let arr = ['пон', 'вт', 'ср', "чт", "пт", "сб", "вс"]
//
// console.log(arr[a-1])



// 2 Не знаю как сделать(


// 3

// let a = prompt("Секунды")
// let day = 86400
// console.log(a/day)


// 4

// let len = prompt('Длинна строки:')
// let str = prompt('Строка:')
//
// StrFun(str, len);
//
// function StrFun(str, len){
//     if(str.length > len){
//         console.log(str.slice(0, len))
//     }
//     return str
// }


// 5


// let date = prompt("Дата:")
// console.log(getZodiacSign(date))
//
// function getZodiacSign(date) {
//     let parts = date.split('/');
//
//     let month = parseInt(parts[0]);
//     let day = parseInt(parts[1]);
//
//     if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//         return 'Водолей';
//     } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//         return 'Рыбы';
//     } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//         return 'Овен';
//     } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//         return 'Телец';
//     } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//         return 'Близнецы';
//     } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//         return 'Рак';
//     } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//         return 'Лев';
//     } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//         return 'Дева';
//     } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
//         return 'Весы';
//     } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
//         return 'Скорпион';
//     } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//         return 'Стрелец';
//     } else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
//         return 'Козерог';
//     } else {
//         return "Нету такого"
//     }
// }




// 6

// function sumOfDivisors(number) {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// let num = prompt("Число")
// console.log(sumOfDivisors(num))



// Уровень 5.1

// 1

// function calculateSum() {
//
//     let input1 = document.getElementById("input1").value;
//     let input2 = document.getElementById("input2").value;
//
//
//     let sum = parseFloat(input1) + parseFloat(input2);
//
//     document.getElementById("result").textContent = "Сумма: " + sum;
// }

////2

// function calculateQuarty() {
//     let inp12 = document.getElementById('input3').value;
//
//     let quarty = parseFloat(inp12) ** 2
//
//     document.getElementById("result3").textContent = "Квадрат:" + quarty;
// }


// 4


// function calculateQuarty1() {
//     let inp1 = document.getElementsByClassName('.adc').value;
//     console.log(inp1)
//     let quarty = parseFloat(inp1) ** 2
//
//     document.getElementById("result4").textContent = "Квадрат:" + quarty;
// }
//

// Не понял задания

// Уровень 6.1

//1
//
// function Ulfunction(){
//     let arr = ['ФФФ', 'FAF', 'vfve'];
//     let ul = document.getElementById('listik1');
//     for(let i = 0; i < arr.length; i++){
//         let li = document.createElement('li');
//         li.textContent = arr[i];
//         ul.appendChild(li);
//     }
// }


// 2

// function Ulfunction1(){
//     let arr = [1,2,3,4,5,6,7,8,9,10];
//     let ul = document.getElementById('listik2');
//     for(let i = 0; i < arr.length; i++){
//         let li = document.createElement('li');
//         li.textContent = arr[i];
//         ul.appendChild(li);
//     }
// }


// 3

// function Ulfunction2(){
//     let arr = ["!"];
//     let ul = document.getElementById('listik3');
//     for(let i = 0; i < arr.length; i++){
//         let li = document.createElement('li');
//         li.textContent = arr[i];
//         ul.appendChild(li);
//     }
// }


// 4

// let instr = 0
// function Ulfunction3(){
//     let ul = document.getElementById('listik4');
//     for(let i = 0; i < 1; i++){
//         let li = document.createElement('li');
//         li.textContent = instr;
//         ul.appendChild(li);
//         instr++
//     }
// }


/// 5

// function Ulfunction4(){
//     let ul = document.getElementById('listik5');
//     let liElements = ul.getElementsByTagName('li');
//
//     for (let i = 0; i < liElements.length; i++) {
//         let li = liElements[i];
//         ul.removeChild(li);
//     }
// }


//6
//
// function Ulfunction5(){
//     let ul = document.getElementById('listik6');
//     let liElements = ul.getElementsByTagName('li');
//     let randomIndex = Math.floor(Math.random() * liElements.length);
//     ul.removeChild(liElements[randomIndex]);
// }
//


// уровень 7.1

//1


function Ulfunction6(){
    let ul = document.getElementById('listik7');
    let liElements = ul.getElementsByTagName('li');

    for (let i = 0; i < liElements.length; i++) {
        if (l)
        let li = liElements[i];
        ul.removeChild(li);
    }
}


