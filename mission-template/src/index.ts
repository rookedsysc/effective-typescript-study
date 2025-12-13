import * as readline from "readline";
import { sayHello } from "./helloworld";

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 사용자 입력을 받는 함수 (Promise 기반)
function getUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// 메인 함수
async function main() {
  console.log("=== TypeScript While Loop 입력 예제 ===");
  console.log('종료하려면 "exit" 또는 "quit"를 입력하세요.\n');

  let continueLoop = true;

  while (continueLoop) {
    const now = new Date();

    // 사용자 입력 받기
    const userInput = await getUserInput(
      `[${now.toLocaleTimeString()}] 입력하세요: `
    );

    // 종료 조건 확인
    if (
      userInput.toLowerCase() === "exit" ||
      userInput.toLowerCase() === "quit"
    ) {
      console.log("\n프로그램을 종료합니다.");
      continueLoop = false;
    } else {
      sayHello(userInput);
    }
  }

  // readline 인터페이스 종료
  rl.close();
}

// 프로그램 실행
main().catch((error) => {
  console.error("오류 발생:", error);
  rl.close();
  process.exit(1);
});
