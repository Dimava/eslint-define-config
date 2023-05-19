import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoForInArrayRule {
  /**
   * Disallow iterating over an array with a for-in loop.
   *
   * @see [no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)
   */
  '@typescript-eslint/no-for-in-array': Rule<[RuleLevel]>;
}
