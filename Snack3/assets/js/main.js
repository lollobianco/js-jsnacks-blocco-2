let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(numbers.length)

let somma = 0;

for (let i = 0; i < numbers.length; i++){

   let index = numbers[i]; 

   if (index % 2 == 0){
      console.log (`numero pari`)
   }  else {
         
         somma = somma + index;
         console.log (`somma uguale a ${somma}`)
   }

}

alert(`la somma dei numeri con un indice dispari è: ${somma}`);