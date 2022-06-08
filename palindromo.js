// // solução 1
// function verificaPali(string){
//     if (!string) return "Insira uma string";
    
// // split separa a string em um array de strings 
// // reverse inverte o array
// // join junta o array em uma string
//   return string.split('').reverse().join('') === string ? "É um polindromo": "Não é um polindromo";
// }


// // solução 2
function verificaPali2(string){
    if(!string) return 'Insira uma string';
    
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return 'Não é um polindromo';
        }
    }
    return "É um polindromo";
}
console.log(verificaPali2("gato"));