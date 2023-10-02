import express from 'express';
import { callChat } from './utils/callChat';
import { prisma } from './utils/db';
import dotenv from 'dotenv';
// import swaggerUI from "swagger-ui-express";
// import swaggJ from "./swagger.json";

const app = express();
const port = 8080;
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
  const translated = await callChat(phrase);

  await prisma.prompt.create({
    data: {
      prompt: phrase,
      translation: translated.translation,
    },
  });
  res.status(200).json(translated);
});

// app.use(`/docs`, swaggerUI.serve, swaggerUI.setup(swaggJ));


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
