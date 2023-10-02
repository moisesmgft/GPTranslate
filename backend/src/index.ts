import express from 'express';
import { callChat } from './utils/callChat';
import { prisma } from './utils/db';
import dotenv from 'dotenv';
import cors from 'cors';
// import swaggerUI from "swagger-ui-express";
// import swaggJ from "./swagger.json";

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.send('Ok');
});

app.get('/translations', async (req, res) => {
  /* #swagger.tags = ['Prompt']
     #swagger.description = 'Get Prompt list' */

  const prompts = await prisma.prompt.findMany();
  res.status(200).json(prompts);
});

app.post('/translations', async (req, res) => {
  const { phrase } = req.body;
  console.log(req.body);
  const translated = await callChat(phrase);
  let processedPhrase: string;

  // Check if `phrase` is an array and join the array elements if it is
  if (Array.isArray(translated.translation)) {
    processedPhrase = translated.translation.join('\n');
  } else {
    processedPhrase = translated.translation;
  }
  await prisma.prompt.create({
    data: {
      //phrase can be a list, concatenate it with  \n
      prompt: phrase,
      translation: processedPhrase,
    },
  });
  res.status(200).json(translated);
});

// app.use(`/docs`, swaggerUI.serve, swaggerUI.setup(swaggJ));


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
