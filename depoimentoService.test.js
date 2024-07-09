import {describe, expect} from '@jest/globals'
import { postNewDepoimento } from "./services/depoimentoService.js";



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