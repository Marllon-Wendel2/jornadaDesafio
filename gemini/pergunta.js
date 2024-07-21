import readline from "readline";

function fazerPergunta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            rl.close();
            resolve(resposta)
        })
    })
}

export {
    fazerPergunta
}