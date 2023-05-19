import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNestedTernaryRule {
  /**
   * Disallow nested ternary expressions.
   *
   * @see [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)
   */
  'no-nested-ternary': Rule<[RuleLevel]>;
}
