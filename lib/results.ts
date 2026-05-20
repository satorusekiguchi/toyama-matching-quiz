export const RESULT_CODES = [
  "native",
  "tateyama",
  "black",
  "shrimp",
  "rebel",
] as const;

export type ResultCode = (typeof RESULT_CODES)[number];

export type ResultDefinition = {
  code: ResultCode;
  compatibility: string;
  title: string;
  description: string;
  migrationMerit: string;
};

export const RESULT_DEFINITIONS: Record<ResultCode, ResultDefinition> = {
  native: {
    code: "native",
    compatibility: "120%",
    title: "【もはや先住民】",
    description:
      "昆布を愛し、傘を愛し、大自然を愛するあなた。前世は間違いなく富山県民です。広々とした一軒家で、新鮮なブリを食べながら子育てをする最高の未来が待っています。今すぐ住民票を移しましょう。",
    migrationMerit:
      "富山は持ち家率が高く、子育て環境も安定。生活コストと暮らしの質のバランスが取りやすいエリアです。",
  },
  tateyama: {
    code: "tateyama",
    compatibility: "80%",
    title: "【立山連峰に愛されし者】",
    description:
      "美味しい水と自然、そしてワークライフバランスを重視するあなた。待機児童ゼロで通勤ラッシュもない富山は、あなたのポテンシャルを最大限に引き出す「約束の地」かもしれません。",
    migrationMerit:
      "名水・自然・通勤負荷の軽さがそろうため、子育てと仕事の両立を目指す世帯に相性が良い選択肢です。",
  },
  black: {
    code: "black",
    compatibility: "50%",
    title: "【心に富山ブラックを秘めし者】",
    description:
      "都会の便利さを愛しつつも、心の中では強烈な刺激（ブラック）や新しい環境を求めているあなた。まずはワーケーションで富山を訪れ、絶品の白エビと大自然に触れてみては？",
    migrationMerit:
      "まずは短期滞在で生活リズムを体験すると、住環境の広さや食の豊かさなど移住メリットを実感しやすくなります。",
  },
  shrimp: {
    code: "shrimp",
    compatibility: "15%",
    title: "【白エビのようなどこまでもピュアな都会人】",
    description:
      "タワマンと満員電車を愛するピュアな都会人。いきなり移住すると巨大かまぼこの圧や広すぎる家に戸惑うので、まずは安全な観光旅行からおすすめします。",
    migrationMerit:
      "観光や二拠点から始めると、富山の食・自然・子育て支援の現実的な強みを無理なく比較できます。",
  },
  rebel: {
    code: "rebel",
    compatibility: "1%",
    title: "【傘を持たない反逆者】",
    description:
      "降水確率0%を信じ、蛇口の水の美味しさを知らないあなたは、富山の環境の前では無力です。富山との相性は絶望的ですが、逆に「未知の異世界」として一度訪れてみると価値観がバグるかも？",
    migrationMerit:
      "相性が低くても、実際に訪れると住居コストや食の満足度など、数字では見えない魅力に気づける可能性があります。",
  },
};

export function isResultCode(value: string): value is ResultCode {
  return RESULT_CODES.includes(value as ResultCode);
}
