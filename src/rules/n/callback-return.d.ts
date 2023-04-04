import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CallbackReturnRule = {
  /**
   * Require `return` statements after callbacks.
   *
   * @see [callback-return](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/callback-return.md)
   */
  'n/callback-return': Rule<[RuleLevel, string[]]>;
};
