import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferStrictEqualRule {
  /**
   * Prefer strict equal over equal.
   *
   * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
   */
  'vitest/prefer-strict-equal': Rule<[RuleLevel]>;
}
