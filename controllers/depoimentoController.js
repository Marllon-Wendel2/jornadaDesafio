import { atualizaDepoimento, deletaDepoimento, getAllDepoiment, getDepoimento, getRandom, postNewDepoimento } from "../services/depoimentoService.js"
import fs from 'fs'

async function postDepoimentos(req,res) {
    if(!req.file) {
        return res.status(400).send("Insira uma foto de perfil")
        
    }

    const {nome, depoimento} = req.body
    const imagemBae64 = req.file.buffer.toString('base64')
    const novoDepoimento = {
    nome,
    depoimento,
    data:imagemBae64

}
    try {
    const result = await postNewDepoimento(novoDepoimento)
    res.status(201).json({message: "Novo depoimento inserido", result})
    } catch (erro) {
    res.status(500).send(erro)
    }

}

async function getDepoimentos (req, res) {
    try {
        const result =  await getAllDepoiment()
        const resultWithoutData = result.map(({ data, ...rest }) => rest);
        res.status(200).json(resultWithoutData)
    } catch (erro) {
        res.status(500).json({error: erro.message})
    }
}

async function getDepoimentosId(req, res) {
    const {id} = req.params
    try {
        const result = await getDepoimento(id)
        const {data, ...resultWithoutData} = result
        res.status(200).json(resultWithoutData)
    } catch (erro) {
        res.status(500).json({error: erro.message})
    }
}

async function getDepoimentoRandom(req, res) {
    try {
        const result = await getRandom();
        const resultWithoutData = result.map(({data,...rest}) => rest)
        res.status(200).json(resultWithoutData)
    } catch (erro) {
        res.status(500).json({error: erro.message})
    }
}

async function putDepoimentos(req, res) {
    const {id} = req.params
    const newData = req.body
    try {
        const result = await atualizaDepoimento(id, newData)
        res.status(200).json(result)
    } catch (erro) {
        res.status(500).json({error: erro.message})
    }
}

async function deleteDepoimento(req, res) {
    const {id} = req.params
    try {
        const result = await deletaDepoimento(id)
        if(result.deletedCount===0) {
            res.status(404).json({error: "Depoimento não encontrado"})
        } else {
            res.status(200).json({message: "Depoimento deletado com sucesso"})
        }
    } catch (erro) {
        res.status(500).json({error: erro.message})
    }
}


export {
    postDepoimentos,
    getDepoimentos,
    getDepoimentosId,
    getDepoimentoRandom,
    putDepoimentos,
    deleteDepoimento
}