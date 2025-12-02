export type Trait =
  | "closeness"
  | "control"
  | "selfWorth"
  | "boundary"
  | "growth"

// Low / High
// Closeness:  low = Avoidant,  high = Anxious
// Control:    low = Helpless,  high = Vigilant
// SelfWorth:  low = Insecure,  high = Prideful
// Boundary:   low = Compliant, high = Guarded
// Growth:     low = Settled,   high = Driven
export type Pole = "low" | "high";

export type Question = {
  id: string; // "cl1", "co3", ...
  trait: Trait; // "control", "boundary", ...
  pole: Pole; // "low" or "high"
}

// MoneyIdentities
export type MoneyIdentity = {
  id: number; // 1-32
  bits: string; // e.g. "01011" (5 bits, one per trait)
  i18nKey: string;
}

export type PatternFamily = {
  bits: string; // e.g. "010"
  i18nKey: string;
}

export type TraitScore = {
  trait: Trait;
  dominant: Pole; // "low" or "high"
  lowPercent: number; // 0-100
  highPercent: number; // 0-100
  rawDirection: number; // direction: low (-1) to high (+1)
  isBalancedZone: boolean;
}
