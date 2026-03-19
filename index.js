const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mentorResponde(pergunta) {
    return "Boa pergunta. Antes de ver a resposta completa, tente pensar: qual conceito de programação está envolvido nisso?"
}

function respostaArray(pergunta) {
    return "Boa pergunta sobre array"
}

function respostaFuncao(pergunta) {
    return "Boa pergunta sobre função"
}

function respostaObjeto(pergunta) {
    return "Boa pergunta sobre objeto"
}

function identificarPalavra(pergunta){

    const limparString = pergunta.replace(/[.,;:/?!]/g, "")

    const palavraChave = limparString.split(/\s+/)

    const palavras = palavraChave.map(palavra => palavra.toUpperCase())
    

    if(palavras.includes("FUNCAO") || palavras.includes("FUNÇÃO")){
        return respostaFuncao()
    }
    else if(palavras.includes("ARRAY")){
        return respostaArray()
    }
    else if(palavras.includes("OBJETO")){
        return respostaObjeto()
    }
    else{
        return mentorResponde()
    }

}

rl.question("pergunte algo sobre programação: ", (pergunta) => {


    const resposta = identificarPalavra(pergunta)

    console.log(resposta)

    rl.close()
})

