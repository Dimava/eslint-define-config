import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWithRule {
  /**
   * Disallow `with` statements.
   *
   * @see [no-with](https://eslint.org/docs/rules/no-with)
   */
  'no-with': Rule<[RuleLevel]>;
}
