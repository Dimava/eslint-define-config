import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferToContainRule {
  /**
   * Prefer using toContain().
   *
   * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
   */
  'vitest/prefer-to-contain': Rule<[RuleLevel]>;
}
