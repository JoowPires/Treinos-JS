function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}


const pessoa1 = {
    nome: 'Jow',
    idade: 25
}

const pessoa2 = {
    nome: 'Isa',
    idade: 22
}

const diana = {
    nome: 'Diana',
    idade: 3
}

console.log(calculaIdade.apply(diana, [15]));