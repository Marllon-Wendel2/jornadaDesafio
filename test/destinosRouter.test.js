import request from "supertest";
import { describe } from "@jest/globals"
import app from "../server.js"

let servidor;

beforeEach(() => {
    const port = 4000;
    servidor = app.listen(port);
});

afterEach(() => {
    servidor.close()
    });

describe("Testando endpoint (POST) destinos", () => {
    it('Deve possuir Nome', async () => {
        const destinoMock = {
            preco: 3000
        }

        await request(servidor)
        .post('/destinos')
        .send(destinoMock)
        .expect(400)
        .expect('{"message":"Insira o novo destino"}')
    });

    it('Deve possuir Preço', async () => {
        const destinoMock = {
            nome: "Recife"
        }

        await request(servidor)
        .post('/destinos')
        .send(destinoMock)
        .expect(400)
        .expect('{"message":"Insira o preço do destino"}')
    });

    it('Preço deve ser um número', async () => {
        const destinoMock = {
            nome: "Recife",
            preco: "3000"
        }

        await request(servidor)
        .post('/destinos')
        .send(destinoMock)
        .expect(500)
        .expect('{"message":"Informe um valor do destino valido"}')
    })
})

describe ("Testando enpoint (GET) destinos", () => {
    it('Deve devolver um array contendo todos os destinos no db', async () => {
        const arrayDestinosMock = [
            {
                "_id": "669804426888c1ee095a2e75",
                "nome": "Rio de Janeiro",
                "preco": 4000
            },
            {
                "_id": "6698184e1208d569ed62236f",
                "nome": "xablua",
                "preco": 5000
            }
        ]

        const response = await request(servidor).get('/destinos')

        expect(200)
        expect(response.body).toEqual(arrayDestinosMock)
    })

    it('Deve devolver um único destino referente o ID', async () => {
        const destinoMock =      {
            "_id": "669804426888c1ee095a2e75",
            "nome": "Rio de Janeiro",
            "preco": 4000
        }

        const response = await request(servidor).get(`/destinos/${destinoMock._id}`).send()
        expect(200)
        expect(response.body).toEqual(destinoMock)
    })
})

describe('Testando endpoint (PUT) destinos', () => {
    it('Deve possuir o ID do destino para atualizar', async () => {
        const idMock = "66957760f24e64f311431d6c"


        const response = await request(servidor).put(`/destinos/${idMock}`)
        .expect('{"message":"Destino não encontrado ou não foi possivel atualizar"}')
    })
})


//realmente deletando pelo id se o id for verdadeiro
describe('Testando endpoint (DELETE) destinos', () => {
    it('Deve deletar o destino informado pelo ID', async () => {
        const idMock = "6699e78dff8623894e6dac2a"

        const response = await request(servidor).delete(`/destinos/${idMock}`)
        expect(response.body.message).toEqual('Não foi possivel deletar o destino')
    })
})

