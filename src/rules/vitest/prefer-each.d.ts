import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferEachRule {
  /**
   * Prefer `each` rather than manual loops.
   *
   * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
   */
  'vitest/prefer-each': Rule<[RuleLevel]>;
}
