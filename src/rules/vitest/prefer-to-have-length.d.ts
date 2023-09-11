import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferToHaveLengthRule {
  /**
   * Suggest using toHaveLength().
   *
   * @see [prefer-to-have-length](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md)
   */
  'vitest/prefer-to-have-length': Rule<[RuleLevel]>;
}
