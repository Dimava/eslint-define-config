import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNumericLiteralsRule {
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
   *
   * @see [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
   */
  'prefer-numeric-literals': Rule<[RuleLevel]>;
}
