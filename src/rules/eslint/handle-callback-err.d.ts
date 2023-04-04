import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HandleCallbackErrRule = {
  /**
   * Require error handling in callbacks.
   *
   * @deprecated
   *
   * @see [handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)
   */
  'handle-callback-err': Rule<[RuleLevel, string]>;
};
