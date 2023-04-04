import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NewlineBeforeReturnRule = {
  /**
   * Require an empty line before `return` statements.
   *
   * @deprecated
   *
   * @see [newline-before-return](https://eslint.org/docs/rules/newline-before-return)
   */
  'newline-before-return': Rule<[RuleLevel]>;
};
