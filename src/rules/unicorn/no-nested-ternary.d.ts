import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNestedTernaryRule {
  /**
   * Disallow nested ternary expressions.
   *
   * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-nested-ternary.md)
   */
  'unicorn/no-nested-ternary': Rule<[RuleLevel]>;
}
