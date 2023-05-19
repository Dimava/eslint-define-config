import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNegativeIndexRule {
  /**
   * Prefer negative index over `.length - index` when possible.
   *
   * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-negative-index.md)
   */
  'unicorn/prefer-negative-index': Rule<[RuleLevel]>;
}
