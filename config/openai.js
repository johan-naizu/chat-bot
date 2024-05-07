import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const completion = async (messages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });
    return response.choices[0].message.content;
  } catch (e) {
    console.log(e);
  }
};

export default completion;
