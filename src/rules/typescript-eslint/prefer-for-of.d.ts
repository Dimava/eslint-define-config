import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferForOfRule {
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible.
   *
   * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
   */
  '@typescript-eslint/prefer-for-of': Rule<[RuleLevel]>;
}
