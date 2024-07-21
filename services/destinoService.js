import { ObjectId } from "mongodb"
import { destinoColletion } from "../db/index.js"
import run from "../gemini/index.js"
import { response } from "express"

async function newDestino(novoDestino) {
    try {
        
        if(!Number.isFinite(novoDestino.preco)) {
            throw new Error ("Informe um valor do destino valido")
        }
        const result = await destinoColletion.insertOne(novoDestino)

        if(result) {
            return result
        } else {
            throw new Error("Não foi possivel criar novo destino")
        }
    } catch (erro) {
        throw erro
    }
}

async function getAllDestino() {
    try {
        const response = await destinoColletion.find({}).toArray();
        return response

    } catch (erro) {
        throw erro
    }
}

async function getDestinoFilter(filter) {
    try {
        const response = await destinoColletion.find(filter).toArray();
        return response
    } catch (erro) {
        throw erro; 
    }
}

async function getById(id) {
    try {
        const response = await destinoColletion.findOne({ _id: new ObjectId(id)})
        const descricaoDestino = await run(response.nome)

        if(response) {
            return {response, descricaoDestino}
        } else {
            throw new Error("Destino não localizado")
        }
    } catch (erro) {
        throw erro
    }
}

async function putDestinoById(id, data) {
    try {
        const response = await destinoColletion.updateOne(
            {_id: new ObjectId(id)},
            {$set: data}
        );

        if(response.matchedCount === 1) {
            return {
                message: "Destino atualizado com sucesso",
                result: response
            }
        } else {
            throw new Error("Destino não encontrado ou não foi possivel atualizar")
        }
    } catch (erro) {
        throw erro;
    }
}

async function deleteDestinoById(id) {
    try {
        const response = await destinoColletion.deleteOne({_id: new ObjectId(id)})
        if(response.deletedCount === 1) {
            return {
                message: "Destino deletado com sucesso",
                result: response
            }
        } else {
            throw new Error("Não foi possivel deletar o destino")
        }
    } catch (erro) {
        throw erro
    }
}



export {
    newDestino,
    getAllDestino,
    getDestinoFilter,
    getById,
    putDestinoById,
    deleteDestinoById
}