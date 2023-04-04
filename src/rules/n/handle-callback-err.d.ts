import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HandleCallbackErrRule = {
  /**
   * Require error handling in callbacks.
   *
   * @see [handle-callback-err](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/handle-callback-err.md)
   */
  'n/handle-callback-err': Rule<[RuleLevel, string]>;
};
