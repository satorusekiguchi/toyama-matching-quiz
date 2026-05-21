import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryIcon } from "@/components/CategoryIcon";
import { PageShell } from "@/components/PageShell";
import { ShareButtons } from "@/components/ShareButtons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RESULT_DEFINITIONS, isResultCode } from "@/lib/results";
import { QUESTION_COUNT, getResultByAnswers, parseAnswers } from "@/lib/scoring";
import { RESULT_ICONS } from "@/lib/visuals";

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
  const resultIcon = RESULT_ICONS[resultData.code];

  return (
    <PageShell>
      <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-6 px-5 py-10 md:py-14">
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="space-y-3 p-7 text-center md:p-10">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-sky-700 uppercase ring-1 ring-sky-100">
              <CategoryIcon icon="sparkles" className="size-3.5" />
              あなたの診断結果
            </p>
            <p className="text-sm text-zinc-500">富山との相性</p>
            <p className="text-5xl font-black tracking-tight text-sky-600 md:text-6xl">
              {resultData.compatibility}
            </p>
            <p className="inline-flex items-center gap-2 pt-2 text-xl font-bold text-zinc-900 md:text-2xl">
              <CategoryIcon icon={resultIcon} className="size-6 text-sky-600" />
              {resultData.title}
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-base font-bold text-zinc-900">
              <CategoryIcon icon="compass" className="size-4 text-sky-600" />
              結果コメント
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-zinc-700 md:text-base">
              {resultData.description}
            </p>
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700">
                <CategoryIcon icon="house" className="size-3.5" />
                移住メリットのヒント
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                {resultData.migrationMerit}
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                <p className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600">
                  <CategoryIcon icon="baby" className="size-3.5 text-rose-600" />
                  子育て
                </p>
                <p className="mt-1 text-xs text-zinc-600">待機児童ゼロで安心しやすい環境</p>
              </div>
              <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                <p className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600">
                  <CategoryIcon icon="droplets" className="size-3.5 text-cyan-600" />
                  名水
                </p>
                <p className="mt-1 text-xs text-zinc-600">暮らしの中で水のおいしさを実感</p>
              </div>
              <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-3">
                <p className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600">
                  <CategoryIcon icon="house" className="size-3.5 text-amber-600" />
                  住まい
                </p>
                <p className="mt-1 text-xs text-zinc-600">持ち家もしやすいゆとりある住環境</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-base font-bold text-zinc-900">
              <CategoryIcon icon="share2" className="size-4 text-emerald-600" />
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
