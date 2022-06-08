// // Sem o modo This

// const array = [1,2,3,4,5,6,7]

// console.log(array.map((contagem) => contagem * 2))

// console.log(array);

// Com o modo This

const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

    return array.map(function (contagem){
        return contagem * this.price;
    }, apple);
    }

    console.log(mapArray());