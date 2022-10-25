let names = ['Alberto', 'Lorenzo', 'Letizia', 'Samuele', 'Erika', 'Pietro', 'Andrea', 'Alessia', 'Alessandro'];
let surnames = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Fontana', 'Moretti', 'Greco', 'Lombardi', 'Marchetti'];

for (let i = 0; i < names.length && i < surnames.length; i++) {

   let randomName = Math.floor(Math.random() * names.length);
   let randomSurname = Math.floor(Math.random() * surnames.length);

   console.log(`${randomName, names[randomName]} ${randomSurname, surnames[randomSurname]}`);

}