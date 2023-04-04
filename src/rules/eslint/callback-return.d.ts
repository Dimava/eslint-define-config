import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CallbackReturnRule = {
  /**
   * Require `return` statements after callbacks.
   *
   * @deprecated
   *
   * @see [callback-return](https://eslint.org/docs/rules/callback-return)
   */
  'callback-return': Rule<[RuleLevel, string[]]>;
};
