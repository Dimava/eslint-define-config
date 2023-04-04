import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedEnableRule = {
  /**
   * Disallow unused `eslint-enable` comments.
   *
   * @see [no-unused-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html)
   */
  'eslint-comments/no-unused-enable': Rule<[RuleLevel]>;
};
