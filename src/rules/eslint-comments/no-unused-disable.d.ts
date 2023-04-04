import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedDisableRule = {
  /**
   * Disallow unused `eslint-disable` comments.
   *
   * @see [no-unused-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html)
   */
  'eslint-comments/no-unused-disable': Rule<[RuleLevel]>;
};
