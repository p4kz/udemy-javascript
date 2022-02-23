  
let varA = 'A';
let varB = 'B';
let varC = 'C';

let varD = varA;

varD = varA
varA = varC
varC = varD

varD = varB
varB = varA
varA = varD

console.log (varA, varB, varC);