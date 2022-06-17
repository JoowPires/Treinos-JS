// function trocarPar(array){
//     if(!array) return -1;
//     if(!array.length) return -1;
   
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === 0){
//             console.log("O número já é zero!")
//         }else if(array[i] % 2 === 0){
//             console.log(`Substituindo o número ${array[i]} por zero`);
//             array[i] = 0;
//         }
//     }
//     return array;
// }

let n = 5
let frase = [];

for (let i = 0; i < n-1; i++){
    frase.push("Ho ")
  }

    frase.push("Ho!");

const frasejoin = frase.join(', ')
const resultado = frasejoin.replace(/,/g , "")

console.log(resultado)
// let arr = [2,3,5,7,8,10,22,12,435,65,32,88];
// console.log(trocarPar([null]));
