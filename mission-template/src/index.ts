import * as readline from "readline";

async function main(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (true) {
    const userInput = await new Promise<string>((resolve) => {
      rl.question("", (answer) => {
        resolve(answer);
      });
    });

    console.log(`${userInput}`);
  }
}

main();
