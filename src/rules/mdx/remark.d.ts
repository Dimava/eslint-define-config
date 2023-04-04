import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RemarkRule = {
  /**
   * Linter integration with remark plugins.
   *
   */
  'mdx/remark': Rule<[RuleLevel]>;
};
