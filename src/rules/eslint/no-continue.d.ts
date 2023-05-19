import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoContinueRule {
  /**
   * Disallow `continue` statements.
   *
   * @see [no-continue](https://eslint.org/docs/rules/no-continue)
   */
  'no-continue': Rule<[RuleLevel]>;
}
