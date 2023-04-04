import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExportsAssignRule = {
  /**
   * Disallow the assignment to `exports`.
   *
   * @see [no-exports-assign](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-exports-assign.md)
   */
  'n/no-exports-assign': Rule<[RuleLevel]>;
};
