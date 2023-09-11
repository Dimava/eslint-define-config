import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAlertRule {
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`.
   *
   * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
   */
  'no-alert': Rule<[RuleLevel]>;
}
