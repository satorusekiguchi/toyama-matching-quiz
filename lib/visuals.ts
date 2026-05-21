import type { ResultCode } from "@/lib/results";

export type CategoryVisual = {
  icon: IconName;
  badgeClassName: string;
  hint: string;
};

export type IconName =
  | "fish"
  | "mountain"
  | "baby"
  | "house"
  | "droplets"
  | "briefcase"
  | "leaf"
  | "utensils"
  | "umbrella"
  | "users"
  | "sparkles"
  | "share2"
  | "shipWheel"
  | "compass"
  | "cloudRain";

export const CATEGORY_VISUALS: Record<string, CategoryVisual> = {
  "海鮮": {
    icon: "fish",
    badgeClassName: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    hint: "富山湾の旬を楽しめる食文化",
  },
  "自然": {
    icon: "mountain",
    badgeClassName: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    hint: "海と山が近い立体的な自然環境",
  },
  "子育て": {
    icon: "baby",
    badgeClassName: "bg-rose-50 text-rose-700 ring-rose-100",
    hint: "ゆとりある環境で子育てしやすい",
  },
  "住環境": {
    icon: "house",
    badgeClassName: "bg-amber-50 text-amber-700 ring-amber-100",
    hint: "広さとコストのバランスが良い住まい",
  },
  "水・インフラ": {
    icon: "droplets",
    badgeClassName: "bg-sky-50 text-sky-700 ring-sky-100",
    hint: "日常で名水を感じられる生活",
  },
  "ワークライフ": {
    icon: "briefcase",
    badgeClassName: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    hint: "通勤負荷が軽く時間を作りやすい",
  },
  "食文化：昆布": {
    icon: "leaf",
    badgeClassName: "bg-lime-50 text-lime-700 ring-lime-100",
    hint: "だし文化が深く根づく土地",
  },
  "ご当地グルメ": {
    icon: "utensils",
    badgeClassName: "bg-orange-50 text-orange-700 ring-orange-100",
    hint: "地域色ある食で会話が弾む",
  },
  "天候": {
    icon: "umbrella",
    badgeClassName: "bg-blue-50 text-blue-700 ring-blue-100",
    hint: "雨との付き合いも暮らしの知恵",
  },
  "コミュニティ": {
    icon: "users",
    badgeClassName: "bg-violet-50 text-violet-700 ring-violet-100",
    hint: "ちょうどよい距離感のご近所づきあい",
  },
};

export const RESULT_ICONS: Record<ResultCode, IconName> = {
  native: "shipWheel",
  tateyama: "mountain",
  black: "compass",
  shrimp: "sparkles",
  rebel: "cloudRain",
};
