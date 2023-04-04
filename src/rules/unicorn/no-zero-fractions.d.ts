import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoZeroFractionsRule = {
  /**
   * Disallow number literals with zero fractions or dangling dots.
   *
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': Rule<[RuleLevel]>;
};
