import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ShareButtons } from "@/components/ShareButtons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RESULT_DEFINITIONS, isResultCode } from "@/lib/results";
import { QUESTION_COUNT, getResultByAnswers, parseAnswers } from "@/lib/scoring";

type ResultPageProps = {
  params: Promise<{
    code: string;
  }>;
  searchParams?: Promise<{
    a?: string;
  }>;
};

function getResultData(code: string, answerString?: string) {
  if (!isResultCode(code)) return null;

  const answers = parseAnswers(answerString);
  if (answers.length === QUESTION_COUNT) {
    const { result } = getResultByAnswers(answers);
    return {
      ...result,
      answerString: answers.join(""),
    };
  }

  return {
    ...RESULT_DEFINITIONS[code],
    answerString: "",
  };
}

export async function generateMetadata({
  params,
  searchParams,
}: ResultPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const resultData = getResultData(resolvedParams.code, resolvedSearchParams?.a);
  if (!resultData) {
    return {
      title: "診断結果が見つかりません",
    };
  }

  const query = resultData.answerString ? `?a=${resultData.answerString}` : "";
  const imageUrl = `/api/og/${resultData.code}${query}`;
  const title = `富山相性 ${resultData.compatibility} ${resultData.title}`;
  const description = `${resultData.description} #富山移住マッチング診断`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ResultPage({ params, searchParams }: ResultPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const resultData = getResultData(resolvedParams.code, resolvedSearchParams?.a);
  if (!resultData) {
    notFound();
  }

  const sharePath = `/result/${resultData.code}${
    resultData.answerString ? `?a=${resultData.answerString}` : ""
  }`;
  const shareText = `診断結果は「${resultData.title}」でした！富山との相性は${resultData.compatibility}。あなたも試してみてね。`;

  return (
    <PageShell>
      <main className="flex min-h-dvh flex-col gap-6 px-5 py-10 md:py-14">
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="space-y-3 p-7 text-center md:p-10">
            <p className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">
              あなたの診断結果
            </p>
            <p className="text-sm text-zinc-500">富山との相性</p>
            <p className="text-5xl font-black tracking-tight text-sky-600 md:text-6xl">
              {resultData.compatibility}
            </p>
            <p className="pt-2 text-xl font-bold text-zinc-900 md:text-2xl">
              {resultData.title}
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-bold text-zinc-900">
              結果コメント
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
              {resultData.description}
            </p>
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
              <p className="text-xs font-bold text-amber-700">
                移住メリットのヒント
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                {resultData.migrationMerit}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-bold text-zinc-900">
              SNSでシェアする
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ShareButtons sharePath={sharePath} shareText={shareText} />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/quiz"
            className={buttonVariants({
              variant: "outline",
              className: "rounded-full border-zinc-300 text-zinc-700 hover:bg-zinc-100",
            })}
          >
            もう一度診断する
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              className: "rounded-full bg-sky-600 text-white hover:bg-sky-700",
            })}
          >
            トップへ戻る
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
