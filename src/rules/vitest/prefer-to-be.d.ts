import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferToBeRule {
  /**
   * Suggest using toBe().
   *
   * @see [prefer-to-be](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md)
   */
  'vitest/prefer-to-be': Rule<[RuleLevel]>;
}
