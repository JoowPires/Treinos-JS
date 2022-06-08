const alunos =[
    {
    nome: 'João', 
    nota: 5,
    turma: '1B'
},
{
    nome: 'Maria',
    nota: 9,
    turma: '1B'
},
{
    nome: 'Pedro',
    nota: 6,
    turma: '2C'
},
{
    nome: 'Ana', 
    nota: 3,
    turma: '1B'
},
];

function alunosAprovados(arr, media){
    let aprovado = [];

    for (let i = 0; i < arr.length; i++){
        const {nome, nota} = arr[i];

        if (nota >= media){
            aprovado.push(nome);
        }
    }
    return aprovado;
}

console.log(alunosAprovados(alunos, 5));