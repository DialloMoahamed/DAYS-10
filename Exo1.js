// Reponse numero 1
const ensemble = new Set()
console.log(ensemble);


// Reponse numero 2
const number = [0,1,2,3,4,5,6,7,8,9,10]
 setOfNumber = new Set()
 for (const numero of number) {
    setOfNumber.add(numero)
 }
console.log(setOfNumber);


// Reponse numero 3
console.log(setOfNumber.delete(0));


// Reponse numero 4
setOfNumber.clear();
console.log(setOfNumber);


// Reponse numero 5
const element = new Map();
element.set('Niger', 'Niamey')
element.set('Togo', 'Lomé')
element.set('Nigeria', 'Abuja')
element.set('Bénin', 'Porto-Novo')
element.set('Burkina fasso', 'Ouagadougou')
for (const [country, city] of element) {
    console.log(country, city);
}


// Reponse numero 6
const mapOfCountries = new Map(element)
console.log(mapOfCountries);
for (const contry of mapOfCountries) {
    console.log(contry.length);
}