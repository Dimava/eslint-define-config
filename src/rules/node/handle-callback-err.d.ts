import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HandleCallbackErrRule = {
  /**
   * Require error handling in callbacks.
   *
   * @see [handle-callback-err](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/handle-callback-err.md)
   */
  'node/handle-callback-err': Rule<[RuleLevel, string]>;
};
