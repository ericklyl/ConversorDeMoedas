
let usdInput = document.querySelector('#usd')
let brlInput = document.querySelector('#brl')

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

//valor padrao pro usd input
usdInput.value = "1000,00"
let dolar = 5.43

convert("usd-to-brl")

//funções
function formatCurrency(value){
    //ajustar o valor:
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false, //não coloca ponto milhar ou centena
        minimunFractionDigits: 2, //sempre ter dois digitos dps da virgula
    }
    //utilizar função de formatar
    let formatter = new Intl.NumberFormat("pt-BR", options) //criado o formatador
    return formatter.format(fixedValue) //retorna o valor formatado 
    
}

function fixValue(value){
    //função que pega , e tranforma em .
    let fixedValue = value.replace(",",".")

    //função que transforma string em float
    let floatValue = parseFloat(fixedValue)

    //se não tiver valor, retorna 0
    if (floatValue == NaN){
        floatValue = 0
    }
    return floatValue
}


function convert(type){
    if(type == "usd-to-brl"){
        //ajusta o valor
        let fixedValue = fixValue(usdInput.value)
        //converte de dolar pra real
        let result = fixedValue * dolar
        result = result.toFixed(2) //deixa só 2 decimais
        //mostra no campo de real
        brlInput.value = formatCurrency(result)
    }

    if(type == "brl-to-usd"){
        //ajusta o valor
        let fixedValue = fixValue(brlInput.value)
        //converte pra dolar
        let result = fixedValue / dolar
        result = result.toFixed(2)
        //mostra no campo do dolar
        usdInput.value = formatCurrency(result)

    }
}