import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <PageShell>
      <main className="flex min-h-dvh flex-col justify-center gap-10 px-5 py-14 md:py-20">
        <header className="space-y-5 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">
            Toyama Migration Quiz
          </p>
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-zinc-900 md:text-5xl">
            あなたと富山の相性は？
            <br />
            <span className="text-sky-600">10問でわかる診断</span>
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base">
            海鮮、自然、子育て、住環境。
            <br />
            楽しく答えるだけで、富山で暮らすリアルな魅力が見えてきます。
          </p>
        </header>

        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardContent className="space-y-6 p-7 md:p-9">
            <h2 className="text-lg font-bold text-zinc-900 md:text-xl">
              こんな人におすすめ
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-zinc-700 md:text-base">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                移住に興味はあるけど、何から調べるか迷っている
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                富山の暮らしやすさを楽しく知りたい
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                診断結果をSNSでシェアして盛り上がりたい
              </li>
            </ul>
            <Link
              href="/quiz"
              className={buttonVariants({
                className:
                  "h-12 w-full rounded-full bg-sky-600 text-base font-bold text-white hover:bg-sky-700",
              })}
            >
              診断をはじめる
            </Link>
          </CardContent>
        </Card>
      </main>
    </PageShell>
  );
}
