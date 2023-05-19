import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RemarkRule {
  /**
   * Linter integration with remark plugins.
   *
   */
  'mdx/remark': Rule<[RuleLevel]>;
}
