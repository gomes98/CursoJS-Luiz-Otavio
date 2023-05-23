/** 55. For in - Estrutura de repetição
 * For in -> lê os índices ou chaves do objeto
 */

const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Mauricio',
    sobrenome: 'Gomes',
    idade: 36
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
