import { Question, Trait, TraitScore } from "./types";
import { TRAITS } from "./data";

export type Answers = Record<string, number>; // questionId -> 1~5 Likert score

/**
 * Conceptual model:
 * -----------------
 * - Each trait is bipolar: low pole (e.g. Avoidant) ↔ high pole (e.g. Anxious).
 * - We want a continuous latent score T in [-1, +1] for each trait:
 *      T ≈ -1  → strongly low-pole (e.g. very Avoidant)
 *      T ≈  0  → balanced / flexible zone
 *      T ≈ +1  → strongly high-pole (e.g. very Anxious)
 *
 * - UI / reporting can then:
 *      - Convert T to a percentage intensity |T| * 100 (0–100),
 *      - Label the dominant pole (low vs high),
 *      - Optionally multiply by 100 to get a -100 ~ +100 scale.
 */

const BALANCED_THRESHOLD = 0.1;
// If |T| < BALANCED_THRESHOLD we treat the trait as being in a "balanced zone".
// With 0.1, that means roughly the inner [-10, +10] range on a -100~+100 scale.

const MIN_PERCENT = 1;
// We never want a 0% / 0% split for identity typing.
// If the magnitude is extremely small, we still give at least 1% to the dominant side,
// so users are never shown a perfectly neutral 50%-50% profile.

/**
 * Calculate score for a single trait.
 *
 * @param trait     The trait we're scoring (e.g. "closeness").
 * @param questions All questions in the test (with trait + pole metadata).
 * @param answers   User answers, keyed by question id, values 1~5.
 *
 * Returns a TraitScore with:
 *  - dominant pole ("low" or "high")
 *  - lowPercent / highPercent (0~100)
 *  - rawDirection T in [-1, +1]
 *  - isBalancedZone: whether |T| is small enough to consider "balanced"
 */
export function calculateTraitScore(
  trait: Trait,
  questions: Question[],
  answers: Answers
): TraitScore | null {
  // Select all questions that belong to this trait
  const traitQuestions = questions.filter((q) => q.trait === trait);

  if (traitQuestions.length === 0) return null;

  let sum = 0;
  let count = 0;

  for (const q of traitQuestions) {
    const raw = answers[q.id];

    // If unanswered, treat as neutral (3).
    // This avoids skewing the trait direction just because a user skipped an item.
    const answer = raw ?? 3;

    /**
     * Map 1~5 Likert to a symmetric -1~+1 deviation:
     *
     *  1 (Strongly Disagree) → -1
     *  2                     → -0.5
     *  3 (Neutral)           →  0
     *  4                     → +0.5
     *  5 (Strongly Agree)    → +1
     *
     * This gives us a standardized "agreement signal" for each item.
     */
    const deviation = (answer - 3) / 2;

    /**
     * Apply trait direction:
     *
     *  - For "high" pole items:
     *      Agreement (deviation > 0) pushes T toward the high pole (+).
     *      Disagreement (deviation < 0) pushes T toward the low pole (-).
     *
     *  - For "low" pole items:
     *      Agreement should push toward the low pole.
     *      So we invert the deviation by multiplying by -1.
     */
    const contribution = q.pole === "high" ? deviation : -deviation;

    sum += contribution;
    count += 1;
  }

  if (count === 0) {
    // Safety fallback: if for some reason there are no questions for this trait,
    // we still need *some* classification so downstream logic doesn't break.
    // We arbitrarily classify as slightly high-leaning with minimal intensity.
    return {
      trait,
      dominant: "high",
      lowPercent: 0,
      highPercent: MIN_PERCENT,
      rawDirection: 0,
      isBalancedZone: true,
    };
  }

  /**
   * Raw directional trait score T in [-1, +1].
   *
   * We average the contributions across all items for this trait.
   *  - T ≈ -1: consistently endorsing low-pole items (e.g. Avoidant, Helpless, etc.)
   *  - T ≈  0: mixed / balanced patterns.
   *  - T ≈ +1: consistently endorsing high-pole items (e.g. Anxious, Vigilant, etc.)
   */
  const T = sum / count;

  // Magnitude of direction, ignoring sign. Clamped to [0,1] to be safe.
  const magnitude = Math.min(Math.abs(T), 1); // 0 ~ 1

  // Intensity in percentage terms (0 ~ 100).
  // This is how far they are from the center, regardless of *which* side.
  let intensityPercent = Math.round(magnitude * 100);

  // Flag whether the trait is in the "balanced" band, even though we still
  // assign a dominant pole below.
  const isBalancedZone = magnitude < BALANCED_THRESHOLD;

  let dominant: "low" | "high";
  let lowPercent = 0;
  let highPercent = 0;

  if (T === 0) {
    /**
     * Perfect symmetry is mathematically possible (e.g. equal pulls both ways),
     * but we don't want to report a 0% / 0% case in the UI.
     *
     * Here we:
     *  - Arbitrarily break ties toward the high pole for typing purposes.
     *  - Give the high side MIN_PERCENT intensity.
     */
    dominant = "high";
    highPercent = MIN_PERCENT;
  } else if (T > 0) {
    // Leaning toward the high end (e.g. Anxious, Vigilant, Prideful, Guarded, Driven...)
    dominant = "high";
    if (intensityPercent < MIN_PERCENT) intensityPercent = MIN_PERCENT;
    highPercent = intensityPercent;
  } else {
    // Leaning toward the low end (e.g. Avoidant, Helpless, Insecure, Compliant, Settled...)
    dominant = "low";
    if (intensityPercent < MIN_PERCENT) intensityPercent = MIN_PERCENT;
    lowPercent = intensityPercent;
  }

  return {
    trait,
    dominant,
    lowPercent,
    highPercent,
    // rawDirection is the core latent trait score in [-1, +1].
    // For a -100 ~ +100 representation, you can use: rawDirection * 100.
    rawDirection: Number(T.toFixed(3)),
    isBalancedZone,
  };
}

/**
 * Compute scores for all traits at once.
 *
 * This function:
 *  - Loops over the canonical TRAITS list,
 *  - Calls calculateTraitScore for each,
 *  - Returns a dictionary keyed by trait name.
 */
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
