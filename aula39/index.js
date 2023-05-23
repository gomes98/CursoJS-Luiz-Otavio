
/** 39. Avaliação de Curto-Circuito (Short-Circuit)
* && -> false && true -> false "o valor mesmo"
* || -> true && false -> vai retornar "o valor verdadeiro"
* FALSY - valores que podem ser falsos
* false
* 0
* '' "" ``
* null / undefined
* NaN
*
*/
 
// short-circuit AND &&
// quando o primeiro valor for falso, ele vai retornar o primeiro valor
console.log("short-circuit AND &&");
console.log('Mauricio' && 0 && 'Michele'); // 0
console.log('Mauricio' && true && 'Michele'); // Michele
function falaOi() {
    return 'Oi';
}

let vaiExecutar = "Michele";

console.log(vaiExecutar && falaOi()); // Oi
console.log("");
// ----------------------------------------

// short-circuit OR ||
// quando o primeiro valor for verdadeiro, ele vai retornar o primeiro valor
console.log("short-circuit OR ||");
console.log(0 || false || null || 'Mauricio' || true); // Mauricio

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // preto

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // false mais o false que c é true pois ele é uma string