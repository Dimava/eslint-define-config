import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferComparisonMatcherRule {
  /**
   * Suggest using the built-in comparison matchers.
   *
   * @see [prefer-comparison-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md)
   */
  'vitest/prefer-comparison-matcher': Rule<[RuleLevel]>;
}
