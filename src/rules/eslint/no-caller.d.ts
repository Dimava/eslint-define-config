import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCallerRule {
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`.
   *
   * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
   */
  'no-caller': Rule<[RuleLevel]>;
}
