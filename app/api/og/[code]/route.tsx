import { ImageResponse } from "next/og";
import { RESULT_DEFINITIONS, isResultCode } from "@/lib/results";
import { QUESTION_COUNT, getResultByAnswers, parseAnswers } from "@/lib/scoring";

export const runtime = "edge";

function resolveResult(code: string, answerString?: string) {
  if (!isResultCode(code)) return null;

  const answers = parseAnswers(answerString);
  if (answers.length === QUESTION_COUNT) {
    return getResultByAnswers(answers).result;
  }

  return RESULT_DEFINITIONS[code];
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const resolvedParams = await params;
  const { searchParams } = new URL(request.url);
  const answerString = searchParams.get("a") ?? undefined;
  const result = resolveResult(resolvedParams.code, answerString);

  if (!result) {
    return new Response("Result not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#fafaf9",
          color: "#18181b",
          fontFamily:
            "Noto Sans JP, Hiragino Sans, Hiragino Kaku Gothic ProN, Meiryo, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "220px",
            background: "#DBEAFE",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "140px",
            bottom: "150px",
            width: "290px",
            height: "140px",
            background: "#6EE7B7",
            borderTopLeftRadius: "160px",
            borderTopRightRadius: "160px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "320px",
            bottom: "130px",
            width: "380px",
            height: "190px",
            background: "#34D399",
            borderTopLeftRadius: "220px",
            borderTopRightRadius: "220px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "180px",
            bottom: "160px",
            width: "300px",
            height: "140px",
            background: "#7DD3FC",
            borderTopLeftRadius: "180px",
            borderTopRightRadius: "180px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#0284c7",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 2,
            }}
          >
            Toyama Migration Quiz
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 32,
              fontWeight: 600,
              color: "#52525b",
              position: "relative",
              zIndex: 2,
            }}
          >
            富山との相性
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 128,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#0284c7",
              lineHeight: 1,
              position: "relative",
              zIndex: 2,
            }}
          >
            {result.compatibility}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 44,
              fontWeight: 700,
              color: "#18181b",
              position: "relative",
              zIndex: 2,
            }}
          >
            {result.title}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "18px 28px",
            borderRadius: "999px",
            backgroundColor: "#ffffff",
            border: "1px solid #e4e4e7",
            fontSize: 26,
            fontWeight: 600,
            color: "#52525b",
            position: "relative",
            zIndex: 2,
          }}
        >
          #富山移住マッチング診断
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
