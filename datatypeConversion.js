//convert string into number
let A="23";
let B=Number(A);
//convert string into bool
let C="Maju"
let D=Boolean(C)
//convert number into bool
let E=0;
let F=Boolean(E);
//convert number into string
let G=82;
let H=String(G);
//convert null into number
let I=null
let J=Number(I)
//convert null into string
let K=null;
let L=String(K);
//convert Undefined into number
let M=undefined;
let N=Number(M);
//convert uundefined into string
let O=undefined;
let P=String(O);

console.table([typeof B,typeof D,typeof F,typeof H,typeof J,typeof L,typeof N,typeof P])

