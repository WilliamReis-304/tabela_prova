let numero = Number(prompt("Digite um numero POSITIVO:\n\nNota:Numeros negativos seráo convertidos para positivos"))
let fibonacci = 0
if (Math.sign(numero)== -1 | Math.sign(numero)== -0){
    numero = -1*numero
}

for (let i=0;i<numero;i++){
    fatorial = numero-i
    console.log(numero*fatorial)
    if (i<=1){
        fibonacci = i
    } else{
        fibonacci = (i-1) + (i-2)
    }
}

console.log(fibonacci)