function fazerConta(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let resultado = document.getElementById("resultado")
    let imc = peso/((altura/100)**2)
    console.log(imc)

    if(imc<16){
        resultado.innerText = "Baixo peso muito grave"
    }else if(imc>=16 & imc<17){
        resultado.innerText ="Baixo peso grave"
    }else if(imc>=17 & imc<18.5){
        resultado.innerText ="Baixo peso"
    }else if(imc>=18.5 & imc<25){
        resultado.innerText ="Peso normal"
    }else if(imc>=25 & imc<30){
        resultado.innerText ="Sobrepeso"
    }else if(imc>=30 & imc<35){
        resultado.innerText ="Obesidade grau I"
    }else if(imc>=35 & imc<40){
        resultado.innerText ="Obesidade grau II"
    }else if(imc>=40){
        resultado.innerText ="Obesidade grau III"
    }
}
