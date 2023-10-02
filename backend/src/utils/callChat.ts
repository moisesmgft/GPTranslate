import openai from "./openai";
import buildPrompt from "./prompt";


export const callChat: any = async (text: string) => {
  try {
    const prompt = buildPrompt(text);

    const texts = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `Você é um tradutor profissional do japonês.` },
        { role: 'user', content: prompt },
      ],
      temperature: 0.523,
      max_tokens: 1000,
    });

    console.log(texts.data.choices[0]!.message!.content!);

    const json = JSON.parse(texts.data.choices[0]!.message!.content!);

    const chatObject = {
      phrase: json.frase,
      translation: json.translation,
    };
    return chatObject;
  } catch (error) {
    console.log('An error occurred:', error);
    return callChat(text); // Recursive call if an error occurred
  }
};