import {describe, expect, jest} from '@jest/globals'
import { atualizaDepoimento, deletaDepoimento, getDepoimento, postNewDepoimento } from "../services/depoimentoService.js"; 
import { ObjectId } from 'mongodb';



//depoimentos devem der
describe('Testando depoimentosService. postNewDepoimento', () => {
    it('O depoimento deve possuir, nome, depoimento e data', async () => {
        const usuarioMock = {
            nome: "Marllon",
            depoimento: "legal"
        }

        const depoimentoSalvo = postNewDepoimento(usuarioMock)

        await expect(depoimentoSalvo).rejects.toThrowError('Envie sua foto de perfil')
    })
})

//depoismento get deve possuir os documento do banco de dados
describe('Testando a rota depoimentos', () => {
    const id = "668cf2bff7eb379a6ed57fe0";
    it('Deve pegar o depoimento do Id', async () => {
        const depoimentoMock = {
            _id: new ObjectId(id),
            nome: "ciclano",
            depoimento: "okzinho"
        }
        const response = await getDepoimento(id)
        

        expect(response).toEqual(depoimentoMock);
        });
    
    it('Deve ter acknowledged',  async () => {
        const  bodyMock ={
            nome:"ciclano"
        }


        const response = await atualizaDepoimento(id, bodyMock)

        expect(response).toEqual(
            expect.objectContaining({
                message: "Atualização realizada"
            })
        )
    })

    it('Deve deletar o depoimento', async () => {
        const response = await deletaDepoimento(id)

        expect(response).toEqual(
            expect.objectContaining({
                message: "Depimento deletado"
            })
        )
    })

    })


