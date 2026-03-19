const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

function mentorResponde(pergunta){
    return "Boa pergunta. Antes de ver a resposta completa, tente pesar: qual conceito de programação está envolvido nisso?"
}

rl.question("pergunte algo sobre programação: ", (pergunta) =>{
    const resposta = mentorResponde(pergunta)

    console.log(resposta)
    
    rl.close
})