const buildPrompt = (phrase: string) => {
  const prompt = `
  Você é um tradutor profissional do japonês para o português e recebeu a seguinte frase para traduzir:

  Frase a ser traduzida:
  "${phrase}"    

  De sua resposta no seguinte formato:
"
{
  "translation": [tradução aqui]
}
"
`;
  return prompt

};

export default buildPrompt;