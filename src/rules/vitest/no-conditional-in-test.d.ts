import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConditionalInTestRule {
  /**
   * Disallow conditional tests.
   *
   * @see [no-conditional-in-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md)
   */
  'vitest/no-conditional-in-test': Rule<[RuleLevel]>;
}
