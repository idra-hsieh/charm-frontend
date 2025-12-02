import { Question, Trait, TraitScore } from "./types";
import { TRAITS } from "./data";

export type Answers = Record<string, number>; // questionId -> 1~5

const BALANCED_THRESHOLD = 0.1; // |T| < 0.1 : close to balanced
const MIN_PERCENT = 1; // for identity type categorization

// Calculate score for a single trait
export function calculateTraitScore(
  trait: Trait,
  questions: Question[],
  answers: Answers
): TraitScore | null {
  const traitQuestions = questions.filter((q) => q.trait === trait);

  if (traitQuestions.length === 0) return null;

  let sum = 0;
  let count = 0;

  for (const q of traitQuestions) {
    const raw = answers[q.id];

    // If unanswered, treat as neutral (3)
    const answer = raw ?? 3;

    // 1 ~ 5 -> -1 ~ +1
    // 1 (Strongly Disagree) → -1
    // 3 (Neutral)           →  0
    // 5 (Strongly Agree)    → +1
    const deviation = (answer - 3) / 2;

    // Apply trait direction:
    // - For "high" pole items: agreement => move toward + (high side)
    // - For "low"  pole items: agreement => move toward - (low side)
    const contribution = q.pole === "high" ? deviation : -deviation;

    sum += contribution;
    count += 1;
  }

  if (count === 0) {
    // Fallback: no data, arbitrarily classify as slightly high-leaning
    return {
      trait,
      dominant: "high",
      lowPercent: 0,
      highPercent: MIN_PERCENT,
      rawDirection: 0,
      isBalancedZone: true,
    };
  }

  // Raw directional trait score T in [-1, +1]
  const T = sum / count;

  const magnitude = Math.min(Math.abs(T), 1); // 0 ~ 1
  let intensityPercent = Math.round(magnitude * 100); // 0 ~ 100

  const isBalancedZone = magnitude < BALANCED_THRESHOLD;

  let dominant: "low" | "high";
  let lowPercent = 0;
  let highPercent = 0;

  if (T === 0) {
    // Perfect symmetry is rare; force a minimal classification
    dominant = "high";
    highPercent = MIN_PERCENT;
  } else if (T > 0) {
    // Leaning toward the high end (e.g. Anxious, Vigilant, Prideful...)
    dominant = "high";
    if (intensityPercent < MIN_PERCENT) intensityPercent = MIN_PERCENT;
    highPercent = intensityPercent;
  } else {
    // Leaning toward the low end (e.g. Avoidant, Helpless, Insecure...)
    dominant = "low";
    if (intensityPercent < MIN_PERCENT) intensityPercent = MIN_PERCENT;
    lowPercent = intensityPercent;
  }

  return {
    trait,
    dominant,
    lowPercent,
    highPercent,
    rawDirection: Number(T.toFixed(3)),
    isBalancedZone,
  };
}

// Compute scores for all traits at once
export function calculateAllTraitScores(
  questions: Question[],
  answers: Answers
): Record<Trait, TraitScore> {
  const result = {} as Record<Trait, TraitScore>;

  for (const trait of TRAITS) {
    const score = calculateTraitScore(trait, questions, answers);
    if (score) {
      result[trait] = score;
    }
  }

  return result;
}
