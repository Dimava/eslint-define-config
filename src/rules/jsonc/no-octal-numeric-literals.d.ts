import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoOctalNumericLiteralsRule = {
  /**
   * Disallow octal numeric literals.
   *
   * @see [no-octal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html)
   */
  'jsonc/no-octal-numeric-literals': Rule<[RuleLevel]>;
};
