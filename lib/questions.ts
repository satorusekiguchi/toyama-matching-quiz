export type AnswerOption = "A" | "B" | "C" | "D";

export type QuizChoice = {
  key: AnswerOption;
  text: string;
};

export type QuizQuestion = {
  id: string;
  category: string;
  title: string;
  choices: QuizChoice[];
  weights: Record<AnswerOption, number>;
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    category: "海鮮",
    title: "究極の贅沢といえば、どれ？",
    choices: [
      { key: "A", text: "冬の朝獲れ「寒ブリ」のお刺身を日本酒で流し込む" },
      { key: "B", text: "「富山湾の宝石」白エビのサクサク天丼をかきこむ" },
      { key: "C", text: "予約困難な高級フレンチのフルコース" },
      { key: "D", text: "深夜にウーバーイーツで頼むジャンクフード" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q2",
    category: "自然",
    title: "休日の最高のリフレッシュ方法は？",
    choices: [
      {
        key: "A",
        text: "海抜0mの海から標高3,000mの立山連峰まで、大自然をフルコースで満喫",
      },
      { key: "B", text: "窓を開けて海岸沿いをドライブし、絶景の夕日を眺める" },
      { key: "C", text: "冷暖房完備のショッピングモールでひたすら買い物" },
      { key: "D", text: "窓からビル群を眺めて「都会の風」を感じる" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q3",
    category: "子育て",
    title: "子どもを育てるなら、どんな環境が理想？",
    choices: [
      {
        key: "A",
        text: "泥だらけになって、豊かな自然の中で思い切り走り回ってほしい",
      },
      {
        key: "B",
        text: "待機児童ゼロ！共働きでも安心して預けられるサポート体制重視",
      },
      { key: "C", text: "塾や習い事の選択肢が無数にある都会のど真ん中" },
      { key: "D", text: "とりあえず家の中でずっとYouTubeを見せておく" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q4",
    category: "住環境",
    title: "理想のマイホームの条件は？",
    choices: [
      {
        key: "A",
        text: "庭付き一戸建て！子供が走り回れる広さ（できれば立山連峰ビュー）",
      },
      { key: "B", text: "車社会前提！駐車場は絶対に2〜3台分確保したい" },
      { key: "C", text: "駅徒歩5分以内、夜景が見えるタワーマンション高層階" },
      { key: "D", text: "掃除が面倒なので、最低限の広さのワンルーム" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q5",
    category: "水・インフラ",
    title: "毎日の「飲み水」、どうしてる？",
    choices: [
      {
        key: "A",
        text: "蛇口をひねればミネラルウォーター級の美味しい水が出るのが当たり前",
      },
      { key: "B", text: "毎週末、ポリタンクを持って山まで名水を汲みに行く" },
      { key: "C", text: "スーパーで重たいペットボトルの水をまとめ買いする" },
      { key: "D", text: "水は飲まない。エナジードリンクが主食" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q6",
    category: "ワークライフ",
    title: "毎日の通勤・通学、どうしたい？",
    choices: [
      {
        key: "A",
        text: "マイカー通勤で好きな音楽を熱唱しながら、自分のペースで通いたい",
      },
      { key: "B", text: "満員電車は絶対NG。職住近接で通勤時間は30分以内が理想" },
      { key: "C", text: "ぎゅうぎゅうの満員電車でスマホニュースを読むのが日課" },
      { key: "D", text: "そもそも家から一歩も出たくない（完全フルリモート希望）" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q7",
    category: "食文化：昆布",
    title: "突然ですが、「昆布」への愛を教えてください。",
    choices: [
      { key: "A", text: "おにぎりには「とろろ昆布」を巻くのが常識" },
      { key: "B", text: "昆布締めのお刺身があれば、それだけで幸せ" },
      { key: "C", text: "だしを取る時にたまに使うくらい" },
      { key: "D", text: "正直、最後に昆布を食べたのがいつか思い出せない" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q8",
    category: "ご当地グルメ",
    title: "結婚式の引き出物。一番テンションが上がるのは？",
    choices: [
      {
        key: "A",
        text: "顔の大きさくらいある、カラフルで巨大な「鯛の細工かまぼこ」",
      },
      { key: "B", text: "実用的で美味しい、地元のお米や名産品の詰め合わせ" },
      { key: "C", text: "オシャレなカタログギフトや高級ブランドの食器" },
      { key: "D", text: "日持ちする無難な焼き菓子セット" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q9",
    category: "天候",
    title: "天気予報は「降水確率0%」。家を出る時、どうする？",
    choices: [
      { key: "A", text: "「弁当忘れても傘忘れるな」の精神で絶対に傘を持つ" },
      { key: "B", text: "折りたたみ傘をカバンに忍ばせておく" },
      { key: "C", text: "予報を完全に信じて手ぶらで出かける" },
      { key: "D", text: "そもそも雨が降りそうな気配があれば絶対に外に出ない" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
  {
    id: "q10",
    category: "コミュニティ",
    title: "ご近所さんとの理想の距離感は？",
    choices: [
      {
        key: "A",
        text: "「これ作りすぎたから」と、おかずや釣った魚をお裾分けし合う温かい関係",
      },
      { key: "B", text: "町内会やお祭りには程よく参加し、地域の繋がりを大切にする" },
      {
        key: "C",
        text: "会釈する程度。プライベートには一切干渉しない・されないのが一番",
      },
      { key: "D", text: "隣に誰が住んでいるか全く知らないし、知りたくもない" },
    ],
    weights: { A: 2, B: 2, C: 0, D: -1 },
  },
];
