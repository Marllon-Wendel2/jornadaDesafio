# API Jornada

A API Jornada é uma aplicação desenvolvida utilizando Node.js com o framework Express e banco de dados MongoDB, projetada para gerenciar informações e operações relacionadas a um site de viagens chamado Jornada. A API facilita o gerenciamento dos depoimentos, usuários, e avaliações, permitindo interações dinâmicas e eficientes entre os clientes e o serviço de viagens.


## Autores

- [@Marllon-Wendel2@](https://github.com/Marllon-Wendel2)


## Documentação da API

#### Retorna todos os itens

```http
  GET /depoimentos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
|  | `string` | Todos os depoimentos |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


