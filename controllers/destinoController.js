import { deleteDestinoById, getAllDestino, getById, getDestinoFilter, newDestino, putDestinoById } from "../services/destinoService.js";

async function postDestinos(req, res) {
    const novoDestino = req.body;
    try {
        if(!novoDestino.nome) {
            res.status(400).json({ message: "Insira o novo destino"})
        }
        else if(!novoDestino.preco) {
            res.status(400).json({ message: "Insira o preço do destino"})
        } else {
            const result = await newDestino(novoDestino)
            res.status(201).json({ message: result.message, destino: result})
        }

    }catch (erro) {
        res.status(500).json({ message: erro.message})
    }

}

async function getAllDestinos(req, res) {
    const { nome } = req.query;
    const filter = {};
    try {
        if(nome) {
            filter.nome = nome;
            const response = await getDestinoFilter(filter)
            res.status(200).json(response)
        } else {
            const result = await getAllDestino()
            res.status(200).json(result)
        }
    } catch (erro) {
        res.status(500).json({ message: erro.message})
    }
}

async function getOne(req, res) {
    try {
        const id = req.params.id
        const result = await getById(id)
        res.status(200).json(result)
    } catch (erro) {
        res.status(500).json({message: erro.message})
    }
}

async function putDestino(req, res) {
    try {
        const id = req.params.id
        const data = req.body
        const result = await putDestinoById(id, data)
        res.status(200).json(result)
    } catch (erro) {
        res.status(500).json({message: erro.message})
    }
}

async function deleteOne(req, res) {
    try {
        const id = req.params.id
        const result = await deleteDestinoById(id)
        res.status(200).json(result)
    } catch (erro) {
        res.status(500).json({message: erro.message})
    }
}


export {
    postDestinos,
    getAllDestinos,
    getOne,
    putDestino,
    deleteOne
}