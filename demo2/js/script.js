let number = document.getElementById('number');

let start = 20;
let end = 968;
let ticks = 20;
let speed = 50;

let randomNumbers = [end]

for (let i = 0; i < ticks - 1; i++) {
  randomNumbers.unshift(
    Math.floor(Math.random() * (end - start + 1) + start)
  );
}

randomNumbers.sort((a, b) => {return a - b});

console.log(randomNumbers.length)

let x = 0;
let interval = setInterval(function () {
  
   number.innerHTML = randomNumbers.shift();

   if (++x === ticks) {
      window.clearInterval(interval);
   }

}, speed);