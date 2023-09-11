import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDynamicDeleteRule {
  /**
   * Disallow using the `delete` operator on computed key expressions.
   *
   * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
   */
  '@typescript-eslint/no-dynamic-delete': Rule<[RuleLevel]>;
}
