import { getTranslations } from "next-intl/server";
import { TRAITS } from "./data";
import { TraitScoresByTrait, getResult } from "./content";
import { TraitScore } from "./types";

type SafeResult = ReturnType<typeof getResult>;

export type ResultEmailContent = {
  labels: {
    title: string;
    date: string;
    code: string;
    type: string;
    family: string;
    scores: string;
    footer: string;
    viewReport: string;
    copyright: string;
    tagline: string;
  };
  values: {
    date: string;
    code: string;
    typeName: string;
    familyName: string;
    scores: string;
    viewUrl: string;
  };
};

type BuildParams = {
  locale?: string;
  code: string;
  result: SafeResult;
  traitScores?: TraitScoresByTrait;
  createdAt?: string | number | Date;
  baseUrl?: string;
};

const toPercent = (score?: TraitScore) => {
  if (!score) return 0;
  return Math.round(((score.rawDirection + 1) / 2) * 100);
};

const safe = <T>(fn: () => T, fallback: T): T => {
  try {
    return fn();
  } catch {
    return fallback;
  }
};

export async function buildResultEmailContent({
  locale = "en",
  code,
  result,
  traitScores,
  createdAt,
  baseUrl,
}: BuildParams): Promise<ResultEmailContent> {
  const tUi = await getTranslations({ locale, namespace: "cmi.ui" });
  const tTypes = await getTranslations({ locale, namespace: "cmi.types" });
  const tFamilies = await getTranslations({ locale, namespace: "cmi.families" });
  const tTraits = await getTranslations({ locale, namespace: "cmi.traits" });

  const date = createdAt ? new Date(createdAt) : new Date();
  const formattedDate = date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const scoreSource = traitScores ?? result.traitScores;
  const formattedScores = TRAITS.map((trait) => {
    const percent = toPercent(scoreSource?.[trait]);
    return `${tTraits(`${trait}.traitLabel`)}: ${percent}%`;
  }).join(" | ");

  const origin = (baseUrl ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://charm-money.vercel.app")).replace(/\/$/, "");
  const viewUrl = `${origin}/${locale}/cmi-test/result/${code}`;

  const labels: ResultEmailContent["labels"] = {
    title: safe(() => tUi("result_email_title"), "Analysis Complete"),
    date: safe(() => tUi("result_email_date"), "Assessment Date"),
    code: safe(() => tUi("result_email_code"), "Unique ID"),
    type: safe(() => tUi("result_email_type"), "Archetype"),
    family: safe(() => tUi("result_email_family"), "Family"),
    scores: safe(() => tUi("result_email_scores"), "Trait Breakdown"),
    footer: safe(
      () => tUi("result_email_footer"),
      "You can revisit your results anytime."
    ),
    viewReport: safe(() => tUi("result_email_view_report"), "View Full Report"),
    copyright: safe(
      () => tUi("result_email_copyright"),
      "©2025 Charm."
    ),
    tagline: safe(
      () => tUi("result_email_tagline"),
      "Designed with clarity and compassion."
    ),
  };

  const values: ResultEmailContent["values"] = {
    date: formattedDate,
    code,
    typeName: safe(
      () => tTypes(`${result.type.id}.name`),
      `Type ${result.type.id}`
    ),
    familyName: safe(
      () => tFamilies(`${result.family.bits}.name`),
      "Pattern Family"
    ),
    scores: formattedScores,
    viewUrl,
  };

  return { labels, values };
}
