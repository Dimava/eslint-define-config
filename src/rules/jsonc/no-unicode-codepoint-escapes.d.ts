import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnicodeCodepointEscapesRule {
  /**
   * Disallow Unicode code point escape sequences.
   *
   * @see [no-unicode-codepoint-escapes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html)
   */
  'jsonc/no-unicode-codepoint-escapes': Rule<[RuleLevel]>;
}
