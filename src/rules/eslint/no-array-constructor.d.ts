import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrayConstructorRule {
  /**
   * Disallow `Array` constructors.
   *
   * @see [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)
   */
  'no-array-constructor': Rule<[RuleLevel]>;
}
