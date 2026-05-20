"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type ShareButtonsProps = {
  sharePath: string;
  shareText: string;
};

function encode(text: string) {
  return encodeURIComponent(text);
}

export function ShareButtons({ sharePath, shareText }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const absoluteUrl =
    typeof window === "undefined" ? sharePath : `${window.location.origin}${sharePath}`;

  const shareLinks = useMemo(() => {
    const x = `https://twitter.com/intent/tweet?text=${encode(
      shareText
    )}&url=${encode(absoluteUrl)}&hashtags=${encode("富山移住マッチング診断")}`;
    const threads = `https://www.threads.net/intent/post?text=${encode(
      `${shareText}\n${absoluteUrl}`
    )}`;
    const line = `https://line.me/R/msg/text/?${encode(`${shareText}\n${absoluteUrl}`)}`;

    return { x, threads, line };
  }, [absoluteUrl, shareText]);

  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      <Button
        onClick={() => openShareWindow(shareLinks.x)}
        className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
      >
        Xでシェア
      </Button>
      <Button
        onClick={() => openShareWindow(shareLinks.threads)}
        className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800"
      >
        Threadsでシェア
      </Button>
      <Button
        onClick={() => openShareWindow(shareLinks.line)}
        className="rounded-full bg-green-500 text-white hover:bg-green-600"
      >
        LINEでシェア
      </Button>
      <Button
        onClick={handleCopy}
        variant="outline"
        className="rounded-full border-zinc-300 text-zinc-700 hover:bg-zinc-100"
      >
        {copied ? "コピー完了！" : "URLをコピー"}
      </Button>
    </div>
  );
}
