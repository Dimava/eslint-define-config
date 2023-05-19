import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrayConstructorRule {
  /**
   * Disallow generic `Array` constructors.
   *
   * @see [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
   */
  '@typescript-eslint/no-array-constructor': Rule<[RuleLevel]>;
}
