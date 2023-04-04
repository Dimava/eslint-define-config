import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoHexadecimalNumericLiteralsRule = {
  /**
   * Disallow hexadecimal numeric literals.
   *
   * @see [no-hexadecimal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html)
   */
  'jsonc/no-hexadecimal-numeric-literals': Rule<[RuleLevel]>;
};
