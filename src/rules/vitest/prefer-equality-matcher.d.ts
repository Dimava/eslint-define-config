import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferEqualityMatcherRule {
  /**
   * Suggest using the built-in quality matchers.
   *
   * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
   */
  'vitest/prefer-equality-matcher': Rule<[RuleLevel]>;
}
