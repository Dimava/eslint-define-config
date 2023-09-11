import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoPromiseExecutorReturnRule {
  /**
   * Disallow returning values from Promise executor functions.
   *
   * @see [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)
   */
  'no-promise-executor-return': Rule<[RuleLevel]>;
}
