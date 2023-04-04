import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoAlertRule = {
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`.
   *
   * @see [no-alert](https://eslint.org/docs/rules/no-alert)
   */
  'no-alert': Rule<[RuleLevel]>;
};
