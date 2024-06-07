let alunos = Number(prompt("Digite a quantidade de alunos:"))
let maior = 0
let menor = 9999999999999
let soma =0

for (let i=0 ; i<alunos ; i++){
    let nota = Number(prompt("Digite a nota do aluno:"))
    if (maior < nota){
        maior = nota
    }
    if (menor > nota){
        menor = nota
    }
    soma += nota
}

console.log(`A maior nota da turma é : ${maior}\nA menor nota da turma é : ${menor}\n
A média da turma é : ${soma/alunos}\n`)