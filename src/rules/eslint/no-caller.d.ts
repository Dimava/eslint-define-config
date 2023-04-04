import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCallerRule = {
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`.
   *
   * @see [no-caller](https://eslint.org/docs/rules/no-caller)
   */
  'no-caller': Rule<[RuleLevel]>;
};
