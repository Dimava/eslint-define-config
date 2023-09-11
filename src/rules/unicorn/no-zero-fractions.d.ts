import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoZeroFractionsRule {
  /**
   * Disallow number literals with zero fractions or dangling dots.
   *
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': Rule<[RuleLevel]>;
}
