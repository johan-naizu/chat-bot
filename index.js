import completion from "./config/openai.js";
import readlineSync from "readline-sync";
import colors from "colors";
async function main() {
  console.log(colors.bold.green(`Welcome to the GPT-3.5 CLI`));
  console.log(colors.bold.green(`Type 'exit' to quit`));

  let history = [{ role: "system", content: "You are a helpful assistant." }];

  while (true) {
    try {
      const prompt = readlineSync.question(colors.bold.blue(`You: `));

      if (prompt === "exit") {
        console.log(colors.bold.green(`Goodbye!`));
        return;
      }

      history.push({ role: "user", content: prompt });

      const response = await completion(history);

      console.log(colors.bold.yellow(`Bot: ${response}`));
      history.push({ role: "assistant", content: response });
    } catch (e) {
      console.log(colors.bold.red(`Error: ${e}`));
    }
  }
}
main();
