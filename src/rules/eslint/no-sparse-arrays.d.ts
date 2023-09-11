import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSparseArraysRule {
  /**
   * Disallow sparse arrays.
   *
   * @see [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)
   */
  'no-sparse-arrays': Rule<[RuleLevel]>;
}
