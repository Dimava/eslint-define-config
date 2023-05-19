import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAggregatingEnableRule {
  /**
   * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments.
   *
   * @see [no-aggregating-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html)
   */
  'eslint-comments/no-aggregating-enable': Rule<[RuleLevel]>;
}
