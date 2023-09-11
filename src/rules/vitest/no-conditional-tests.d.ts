import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConditionalTestsRule {
  /**
   * Disallow conditional tests.
   *
   * @see [no-conditional-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md)
   */
  'vitest/no-conditional-tests': Rule<[RuleLevel]>;
}
