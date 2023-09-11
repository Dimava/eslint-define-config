import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferReduceTypeParameterRule {
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of casting.
   *
   * @see [prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)
   */
  '@typescript-eslint/prefer-reduce-type-parameter': Rule<[RuleLevel]>;
}
