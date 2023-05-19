import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExportsAssignRule {
  /**
   * Disallow the assignment to `exports`.
   *
   * @see [no-exports-assign](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-exports-assign.md)
   */
  'node/no-exports-assign': Rule<[RuleLevel]>;
}
