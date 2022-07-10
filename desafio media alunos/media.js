/*
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },

    {
        nome:'Sofia',
        nota: 9,
        turma:'18',
    },

    {
        nome:'Paulo',
        nota: 6,
        turma: '2C',
    },

    {
        aluno:'Miguel',
        nota: 2,
        turma:'2C',
    },
];

function alunosAprovados(arr,media) {
    let aprovados =[];
    for( let i =0; i< arr.length; i++) {
        const{nota,nome} = arr[i];
        if(nota>= media){
            aprovados.push(nome);

        }
    }
    return aprovados;
    console.log(alunosAprovados(alunos,5));
}