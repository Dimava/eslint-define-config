import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferAsConstRule = {
  /**
   * Enforce the use of `as const` over literal type.
   *
   * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
   */
  '@typescript-eslint/prefer-as-const': Rule<[RuleLevel]>;
};
