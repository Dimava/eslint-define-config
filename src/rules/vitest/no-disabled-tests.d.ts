import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDisabledTestsRule {
  /**
   * Disallow disabled tests.
   *
   * @see [no-disabled-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md)
   */
  'vitest/no-disabled-tests': Rule<[RuleLevel]>;
}
