import { QUIZ_QUESTIONS, type AnswerOption } from "@/lib/questions";
import { RESULT_DEFINITIONS, type ResultCode } from "@/lib/results";

export const QUESTION_COUNT = QUIZ_QUESTIONS.length;

export function parseAnswers(raw: string | null | undefined): AnswerOption[] {
  if (!raw) return [];

  return raw
    .toUpperCase()
    .split("")
    .filter((answer): answer is AnswerOption =>
      ["A", "B", "C", "D"].includes(answer)
    )
    .slice(0, QUESTION_COUNT);
}

export function calculateScore(answers: AnswerOption[]): number {
  return answers.reduce((total, answer, index) => {
    const question = QUIZ_QUESTIONS[index];
    if (!question) return total;
    return total + question.weights[answer];
  }, 0);
}

export function resolveResultCode(total: number): ResultCode {
  if (total >= 16) return "native";
  if (total >= 11) return "tateyama";
  if (total >= 5) return "black";
  if (total >= 0) return "shrimp";
  return "rebel";
}

export function getResultByAnswers(answers: AnswerOption[]) {
  const total = calculateScore(answers);
  const code = resolveResultCode(total);

  return {
    total,
    code,
    result: RESULT_DEFINITIONS[code],
  };
}
