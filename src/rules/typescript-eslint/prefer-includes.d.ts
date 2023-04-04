import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferIncludesRule = {
  /**
   * Enforce `includes` method over `indexOf` method.
   *
   * @see [prefer-includes](https://typescript-eslint.io/rules/prefer-includes)
   */
  '@typescript-eslint/prefer-includes': Rule<[RuleLevel]>;
};
