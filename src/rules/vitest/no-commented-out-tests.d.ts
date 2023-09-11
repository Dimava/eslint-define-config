import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCommentedOutTestsRule {
  /**
   * Disallow commented out tests.
   *
   * @see [no-commented-out-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md)
   */
  'vitest/no-commented-out-tests': Rule<[RuleLevel]>;
}
