export let name: string = "Anderson";
export const age: number = 18;
export const isValid: boolean = true;

name = "Melissa";
// name = 123;
// name = tru;

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
expresiones ${1 + 1}
numeros: ${age}
boolean: ${isValid}`;

console.log(templateString);
