import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCondAssignRule {
  /**
   * Disallow assignment operators in conditional expressions.
   *
   * @see [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)
   */
  'no-cond-assign': Rule<[RuleLevel, 'except-parens' | 'always']>;
}
