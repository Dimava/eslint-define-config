import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NewlineBeforeReturnRule {
  /**
   * Require an empty line before `return` statements.
   *
   * @deprecated
   *
   * @see [newline-before-return](https://eslint.org/docs/rules/newline-before-return)
   */
  'newline-before-return': Rule<[RuleLevel]>;
}
