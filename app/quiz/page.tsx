"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { QuizCard } from "@/components/QuizCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { QUIZ_QUESTIONS, type AnswerOption, type QuizChoice } from "@/lib/questions";
import { shuffleArray } from "@/lib/shuffle";
import { getResultByAnswers } from "@/lib/scoring";

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<(AnswerOption | undefined)[]>(
    Array.from({ length: QUIZ_QUESTIONS.length }, () => undefined)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const shuffledChoicesByQuestion = useMemo(
    () =>
      QUIZ_QUESTIONS.map((question) =>
        shuffleArray<QuizChoice>(question.choices)
      ),
    []
  );

  const question = QUIZ_QUESTIONS[currentQuestion];
  const currentChoices = shuffledChoicesByQuestion[currentQuestion];
  const isLastQuestion = currentQuestion === QUIZ_QUESTIONS.length - 1;
  const allAnswered = useMemo(
    () => answers.every((answer) => answer !== undefined),
    [answers]
  );

  const handleSelect = (answer: AnswerOption) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQuestion] = answer;
      return next;
    });

    if (!isLastQuestion) {
      window.setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
      }, 220);
    }
  };

  const handleShowResult = () => {
    if (!allAnswered) return;

    const completeAnswers = answers.filter(
      (answer): answer is AnswerOption => answer !== undefined
    );
    const answerString = completeAnswers.join("");
    const { code } = getResultByAnswers(completeAnswers);

    router.push(`/result/${code}?a=${answerString}`);
  };

  return (
    <PageShell>
      <main className="flex min-h-dvh flex-col gap-6 px-5 py-10 md:py-14">
        <header className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">
            富山移住マッチング診断
          </p>
        </header>

        <QuizCard
          category={question.category}
          title={question.title}
          choices={currentChoices}
          questionIndex={currentQuestion}
          totalQuestions={QUIZ_QUESTIONS.length}
          selectedAnswer={answers[currentQuestion]}
          onSelect={handleSelect}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className={buttonVariants({
              variant: "outline",
              className: "rounded-full border-zinc-300 text-zinc-700 hover:bg-zinc-100",
            })}
          >
            最初に戻る
          </Link>

          {isLastQuestion ? (
            <Button
              onClick={handleShowResult}
              disabled={!allAnswered}
              className="rounded-full bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-40"
            >
              診断結果を見る
            </Button>
          ) : null}
        </div>
      </main>
    </PageShell>
  );
}
