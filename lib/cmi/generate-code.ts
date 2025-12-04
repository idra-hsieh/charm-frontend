import { customAlphabet } from "nanoid";

const DIGITS = "23456789"; // Remove ambiguous numbers
const LETTERS = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz"; // Remove ambiguous letters
const ALPHABET = DIGITS + LETTERS;
const CODE_LENGTH = 6;

export function generateUniqueCode(): string {
  const nanoid = customAlphabet(ALPHABET, CODE_LENGTH);

  while (true) {
    const code = nanoid();

      // Include at least one digit (2-9)
    if (/[2-9]/.test(code)) {
      return code;
    }
  }
}
