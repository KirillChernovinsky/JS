// уровень 1.10

//1

let randomNumbers = [];

const desiredArrayLength = 10; // Пример желаемой длины массива

for (let i = 0; i < desiredArrayLength; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(randomNumbers);