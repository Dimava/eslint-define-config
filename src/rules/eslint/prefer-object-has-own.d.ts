import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferObjectHasOwnRule = {
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
   *
   * @see [prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)
   */
  'prefer-object-has-own': Rule<[RuleLevel]>;
};
