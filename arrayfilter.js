function filtrarPar(array){
    if (!array || !array.length) return;

    const filtrado = array.filter((item) => item % 2 === 0);

    return filtrado;
}

console.log(filtrarPar([1,2,3,4,5,6,]));