import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferLogicalOperatorOverTernaryRule = {
  /**
   * Prefer using a logical operator over a ternary.
   *
   * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-logical-operator-over-ternary.md)
   */
  'unicorn/prefer-logical-operator-over-ternary': Rule<[RuleLevel]>;
};
