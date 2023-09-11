import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrayTypeRule {
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays.
   *
   * @see [array-type](https://typescript-eslint.io/rules/array-type)
   */
  '@typescript-eslint/array-type': Rule<[RuleLevel, ...any[]]>;
}
