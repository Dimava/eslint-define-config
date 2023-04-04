import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CallbackReturnRule = {
  /**
   * Require `return` statements after callbacks.
   *
   * @see [callback-return](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/callback-return.md)
   */
  'node/callback-return': Rule<[RuleLevel, string[]]>;
};
