export function isPalindrome(s: string): boolean {
  // Convert to lowercase
  // Empty string returns true
  const lowercaseString = s.toLowerCase();

  // Remove all non-alphanumeric chars
  const nonAlphaString = lowercaseString.replace(/[^a-zA-Z0-9]/g, "");

  // Must read backwards as well as forwards
  const reversedString = nonAlphaString.split("").reverse().join("");

  return reversedString === nonAlphaString;
}
