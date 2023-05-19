import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferHooksOnTopRule {
  /**
   * Suggest having hooks before any test cases.
   *
   * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
   */
  'vitest/prefer-hooks-on-top': Rule<[RuleLevel]>;
}
