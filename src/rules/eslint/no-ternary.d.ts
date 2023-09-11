import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTernaryRule {
  /**
   * Disallow ternary operators.
   *
   * @see [no-ternary](https://eslint.org/docs/latest/rules/no-ternary)
   */
  'no-ternary': Rule<[RuleLevel]>;
}
