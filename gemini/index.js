import "dotenv/config.js"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { fazerPergunta } from "./pergunta.js";

//Access API
const genAI =  new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run(local) {

    const prompt = `Você é uma site de viagens responder sobre diferente lugares de acordo com o quer o usuario perguntar, localize o nome da cidade ou estado e devolva os motivos para viajar para o ${local}`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text
  }
  
export default run