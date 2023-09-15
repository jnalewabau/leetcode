export function isValid(s: string): boolean {
  if (s.length % 2) {
    return false;
  }

  const parenthesesMap = new Map<string, string>();

  parenthesesMap.set("{", "}");
  parenthesesMap.set("(", ")");
  parenthesesMap.set("[", "]");

  const stack = [];
  for (let char of s) {
    // console.log({ char });
    // console.log({ stack });

    // Is this a left paren
    if (parenthesesMap.has(char) === true) {
      // Push the matching close parameter to the stack
      const expectedCloseParen = parenthesesMap.get(char)!;
      // console.log(
      //   `  ${char} - Open paren found - pushing matching close paren - ${expectedCloseParen}`
      // );
      stack.push(expectedCloseParen);
      continue;
    }

    // Must be a right paren
    const expectedCloseParen = stack.pop();
    // console.log(
    //   `  ${char} - close paren - expect it to match ${expectedCloseParen}`
    // );

    if (char !== expectedCloseParen) {
      // Mismatch - return false;
      return false;
    }
  }

  // console.log({ stackLength: stack.length });
  return stack.length === 0;
}
