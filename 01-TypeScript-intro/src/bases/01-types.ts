export let name = "Anderson";
export const age: number = 35;
export const isValid: boolean = true;

name = "tawaynaskp";

export const templateString = `esto es un string
multilinea
que puede tener 
" dobles
' simple
inyectar valores ${name}
expresiones ${1 + 1}
numeros: ${age}
booleanos: ${isValid}`;

console.log(templateString);
