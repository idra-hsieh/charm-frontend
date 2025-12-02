import { MoneyIdentity, PatternFamily, Question, Trait } from "./types";

// 1. Pattern Families
export const PATTERN_FAMILIES: Record<string, PatternFamily> = {
  "000": { bits: "000", i18nKey: "000" },
  "001": { bits: "001", i18nKey: "001" },
  "010": { bits: "010", i18nKey: "010" },
  "011": { bits: "011", i18nKey: "011" },
  "100": { bits: "100", i18nKey: "100" },
  "101": { bits: "101", i18nKey: "101" },
  "110": { bits: "110", i18nKey: "110" },
  "111": { bits: "111", i18nKey: "111" },
};

// 2. Money Types
export const MONEY_TYPES: MoneyIdentity[] = [
  { id: 1, bits: "00000", i18nKey: "1" },
  { id: 2, bits: "00001", i18nKey: "2" },
  { id: 3, bits: "00010", i18nKey: "3" },
  { id: 4, bits: "00011", i18nKey: "4" },
  { id: 5, bits: "00100", i18nKey: "5" },
  { id: 6, bits: "00101", i18nKey: "6" },
  { id: 7, bits: "00110", i18nKey: "7" },
  { id: 8, bits: "00111", i18nKey: "8" },
  { id: 9, bits: "01000", i18nKey: "9" },
  { id: 10, bits: "01001", i18nKey: "10" },
  { id: 11, bits: "01010", i18nKey: "11" },
  { id: 12, bits: "01011", i18nKey: "12" },
  { id: 13, bits: "01100", i18nKey: "13" },
  { id: 14, bits: "01101", i18nKey: "14" },
  { id: 15, bits: "01110", i18nKey: "15" },
  { id: 16, bits: "01111", i18nKey: "16" },
  { id: 17, bits: "10000", i18nKey: "17" },
  { id: 18, bits: "10001", i18nKey: "18" },
  { id: 19, bits: "10010", i18nKey: "19" },
  { id: 20, bits: "10011", i18nKey: "20" },
  { id: 21, bits: "10100", i18nKey: "21" },
  { id: 22, bits: "10101", i18nKey: "22" },
  { id: 23, bits: "10110", i18nKey: "23" },
  { id: 24, bits: "10111", i18nKey: "24" },
  { id: 25, bits: "11000", i18nKey: "25" },
  { id: 26, bits: "11001", i18nKey: "26" },
  { id: 27, bits: "11010", i18nKey: "27" },
  { id: 28, bits: "11011", i18nKey: "28" },
  { id: 29, bits: "11100", i18nKey: "29" },
  { id: 30, bits: "11101", i18nKey: "30" },
  { id: 31, bits: "11110", i18nKey: "31" },
  { id: 32, bits: "11111", i18nKey: "32" },
];

// 3. Questions
export const QUESTIONS: Question[] = [
  // (1) Closeness Scale
  { id: "cl1", trait: "closeness", pole: "low" },
  { id: "cl2", trait: "closeness", pole: "low" },
  // High End: Anxious
  { id: "cl3", trait: "closeness", pole: "high" },
  { id: "cl4", trait: "closeness", pole: "high" },
  { id: "cl5", trait: "closeness", pole: "high" },

  // (2) Control Scale
  // Low End: Helpless
  { id: "co1", trait: "control", pole: "low" },
  { id: "co2", trait: "control", pole: "low" },
  // High End: Vigilant
  { id: "co3", trait: "control", pole: "high" },
  { id: "co4", trait: "control", pole: "high" },
  { id: "co5", trait: "control", pole: "high" },

  // (3) Self-worth Scale
  // Low End: Insecure
  { id: "sw1", trait: "selfWorth", pole: "low" },
  { id: "sw2", trait: "selfWorth", pole: "low" },
  // High End: Prideful
  { id: "sw3", trait: "selfWorth", pole: "high" },
  { id: "sw4", trait: "selfWorth", pole: "high" },
  { id: "sw5", trait: "selfWorth", pole: "high" },

  // (4) Boundary Scale
  // Low End: Compliant
  { id: "bo1", trait: "boundary", pole: "low" },
  { id: "bo2", trait: "boundary", pole: "low" },
  // High End: Guarded
  { id: "bo3", trait: "boundary", pole: "high" },
  { id: "bo4", trait: "boundary", pole: "high" },
  { id: "bo5", trait: "boundary", pole: "high" },

  // (5) Growth Scale
  // Low End: Settled
  { id: "gr1", trait: "growth", pole: "low" },
  { id: "gr2", trait: "growth", pole: "low" },
  // High End: Driven
  { id: "gr3", trait: "growth", pole: "high" },
  { id: "gr4", trait: "growth", pole: "high" },
  { id: "gr5", trait: "growth", pole: "high" },
]

export const PAGE_SIZE = 5;

// Trait array
export const TRAITS: Trait[] = [
  "closeness",
  "control",
  "selfWorth",
  "boundary",
  "growth",
];