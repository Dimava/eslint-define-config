import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferReturnThisTypeRule = {
  /**
   * Enforce that `this` is used when only `this` type is returned.
   *
   * @see [prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type)
   */
  '@typescript-eslint/prefer-return-this-type': Rule<[RuleLevel]>;
};
