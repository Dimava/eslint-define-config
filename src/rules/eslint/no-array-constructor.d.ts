import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoArrayConstructorRule = {
  /**
   * Disallow `Array` constructors.
   *
   * @see [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)
   */
  'no-array-constructor': Rule<[RuleLevel]>;
};
