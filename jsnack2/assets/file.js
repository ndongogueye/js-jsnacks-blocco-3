const array = [1,2,3,4,5,6,7,8,9,10];

let rosso = document.getElementById('rosso');
let verde = document.getElementById('verde');

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      rosso.innerHTML += array[i] + " ";
    } else {
      verde.innerHTML += array[i] + " ";
    }
  }