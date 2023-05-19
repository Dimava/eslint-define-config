import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoReturnAssignRule {
  /**
   * Disallow assignment operators in `return` statements.
   *
   * @see [no-return-assign](https://eslint.org/docs/rules/no-return-assign)
   */
  'no-return-assign': Rule<[RuleLevel, 'except-parens' | 'always']>;
}
