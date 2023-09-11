import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDebuggerRule {
  /**
   * Disallow the use of `debugger`.
   *
   * @see [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
   */
  'no-debugger': Rule<[RuleLevel]>;
}
