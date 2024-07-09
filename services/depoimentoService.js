import { ObjectId } from "mongodb"
import {clientesDepoimentos} from "../db/index.js"

async function postNewDepoimento(novoDepoimento) {
    try {
        if(!novoDepoimento.data) {
            throw new Error('Envie sua foto de perfil')
        }
    

        const result = await clientesDepoimentos.insertOne(novoDepoimento)
        if(result) {
            return result
        } else {
            throw new Error("Não foi possivel criano novo depoimento")
        }
    } catch (erro) {
        throw erro
    }
    }

async function getAllDepoiment() {
    try {
        const result = await clientesDepoimentos.find({}).toArray()

        if(!result){
            throw erro
        }
        return result
    } catch (erro) {
    }
}

async function getDepoimento(id) {
    try {
        const result = await clientesDepoimentos.findOne({ _id: new ObjectId(id)})

        if(!result) {
            throw new Error('Não foi encontrado depoimento')
        } else {
            return result
        }
        
    } catch (erro) {
        throw erro
    }
}

async function getRandom() {
    try {
        const result = await clientesDepoimentos.aggregate([
            {$sample: {size: 3}}
        ]).toArray();
        if(!result) {
            throw new Error("Não foi encontrado depoimentos")
        }
        return result
    } catch (erro) {
        throw erro;
    }
}


async function atualizaDepoimento (id, newData) {
    try {
        const result = await clientesDepoimentos.updateOne(
            {_id: new ObjectId(id)},
            {$set: newData}
        )

        if (result.matchedCount === 0) {
            throw new Error('Depoimento não encontrado');
        }

        return result
    } catch (erro) {
        throw erro
    }
}

async function deletaDepoimento (id) {
    try {
        const result = clientesDepoimentos.deleteOne({ _id: new ObjectId(id)})

        if (result.deletedCount == 0) {
            throw new Error('Depoimento não encontrado');
        }

        return result;
    } catch (erro) {
        throw erro;
    }
}

    export {
        postNewDepoimento,
        getAllDepoiment,
        getDepoimento,
        getRandom,
        atualizaDepoimento,
        deletaDepoimento
    }