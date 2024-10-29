// Reponse numero 1
// ----- Union a et b ----- //
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


// Reponse numero 2
// ----- intersection a et b ----- //
let Al = new Set(a)
let Bl = new Set(b)
let cl = a.filter((num) =>  Bl.has(num))
let Cl = new Set(cl)
console.log(Cl);


// Reponse numero 3
// ----- difference a et b ----- //
let X = new Set(a)
let Y = new Set(b)
let ca = a.filter((num) =>  !Y.has(num))
let Z = new Set(ca)
console.log(Z);