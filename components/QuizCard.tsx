"use client";

import { CategoryIcon } from "@/components/CategoryIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { type AnswerOption, type QuizChoice } from "@/lib/questions";
import { CATEGORY_VISUALS } from "@/lib/visuals";

type QuizCardProps = {
  category: string;
  title: string;
  choices: QuizChoice[];
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer?: AnswerOption;
  onSelect: (answer: AnswerOption) => void;
};

export function QuizCard({
  category,
  title,
  choices,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelect,
}: QuizCardProps) {
  const progressValue = ((questionIndex + 1) / totalQuestions) * 100;
  const visual = CATEGORY_VISUALS[category];

  return (
    <Card className="w-full border-zinc-200 bg-white shadow-sm">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
              visual?.badgeClassName ?? "bg-sky-50 text-sky-700 ring-sky-100"
            }`}
          >
            {visual ? <CategoryIcon icon={visual.icon} className="size-3.5" /> : null}
            {category}
          </span>
          <p className="text-xs font-medium text-zinc-500">
            {questionIndex + 1} / {totalQuestions}
          </p>
        </div>
        <Progress value={progressValue} className="h-1.5" />
        {visual ? <p className="text-xs text-zinc-500">{visual.hint}</p> : null}
        <CardTitle className="text-lg leading-relaxed font-bold text-zinc-900 md:text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5 pb-6">
        {choices.map((choice, index) => {
          const isActive = selectedAnswer === choice.key;

          return (
            <button
              key={choice.key}
              type="button"
              onClick={() => onSelect(choice.key)}
              className={`quiz-choice flex w-full items-start gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-left ${
                isActive ? "quiz-choice-active" : ""
              }`}
            >
              <span
                className={`mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isActive
                    ? "bg-sky-500 text-white"
                    : "bg-zinc-100 text-zinc-600"
                }`}
              >
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed font-medium text-zinc-800 md:text-base">
                {choice.text}
              </span>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}
