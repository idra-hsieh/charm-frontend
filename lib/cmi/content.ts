import { MONEY_TYPES, PATTERN_FAMILIES } from "./data";
import { Trait, TraitScore } from "./types";

// Helper type: all traits mapped to their scores
export type TraitScoresByTrait = Record<Trait, TraitScore>;

export function getResult(traitScores: TraitScoresByTrait) {
  // Map each trait into one bit based on its dominant pole:
  // low  pole -> "0"
  // high pole -> "1"
  const bitForTrait = (trait: Trait) =>
    traitScores[trait].dominant === "high" ? "1" : "0";

  // Bit order: Closeness | Control | Self-Worth | Boundary | Growth
  const bits =
    bitForTrait("closeness") +
    bitForTrait("control") +
    bitForTrait("selfWorth") +
    bitForTrait("boundary") +
    bitForTrait("growth");

  // Look up the MoneyType by 5-bit pattern
  const type =
    MONEY_TYPES.find((t) => t.bits === bits) || MONEY_TYPES[0];

  // First 3 bits determine the family
  const familyBits = bits.substring(0, 3);
  const family =
    PATTERN_FAMILIES[familyBits] ?? PATTERN_FAMILIES["000"];

  return {
    type, // MoneyType: includes id, bits, i18nKey for types.json
    family, // PatternFamily: includes bits, i18nKey for families.json
    bits, // Overall 5-bit pattern, e.g. "01011"
    traitScores, // Full trait breakdown, used for UI, copy, and charts
  };
}