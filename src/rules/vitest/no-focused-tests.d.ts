import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoFocusedTestsRule {
  /**
   * Disallow focused tests.
   *
   * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
   */
  'vitest/no-focused-tests': Rule<[RuleLevel]>;
}
