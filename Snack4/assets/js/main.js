let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [1, 2, 3, 4, 5, 6, 7]

let differenza = numbers1.length - numbers2.length;
console.log(differenza);

if(differenza != 0){

   for (let i = 0; i < differenza; i++) {

      let n = prompt(`inserisci un numero da aggiungere alla seconda lista`);
      numbers2.push(n);

   }  

}  else{
      alert("La lista è piena");
   }
   

console.log(numbers2);
console.log(numbers1);