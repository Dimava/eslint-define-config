import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTernaryRule = {
  /**
   * Disallow ternary operators.
   *
   * @see [no-ternary](https://eslint.org/docs/rules/no-ternary)
   */
  'no-ternary': Rule<[RuleLevel]>;
};
