let tarefas = ["lavar louça","sair com o cachorro"]
let valido = true
console.log(tarefas)

while (true){
    let escolha = prompt("Digite qual opção deseja\n1-Adicionar tarefa\n2-Remover tarefa\n3-Atualizar tarefa")
    if (escolha == 1){
        let adicionar = prompt("Digite qual tarefa adicionar")
        tarefas.push(adicionar)
    }else if (escolha == 2){
        let remover = prompt("Digite uma tarefa para remover")
        for(let i=0;i<tarefas.length;i++){
            if (remover == tarefas[i]){
                tarefas.splice(i,1)
                break
            }else if(tarefas.length == i){
                alert("Tarefa não encontrada")
                break
            }
        }
    }else if (escolha == 3){
        let atualizar = prompt("Digite qual tarefa deseja atualizar")
        for(let i=0;i<tarefas.length;i++){
            if (atualizar == tarefas[i]){
                let nova = prompt("Digite a nova tarefa")
                tarefas[i] = nova
                break
            }else if(tarefas.length == i){
                alert("Tarefa não encontrada")
                break
            }
        }
    }
    console.log(tarefas)
    let loop = prompt("Deseja modificar mais algo?\nSim\nNão")
    if (loop == "Não"){
        break
    }
}
