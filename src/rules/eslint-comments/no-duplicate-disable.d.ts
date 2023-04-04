import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicateDisableRule = {
  /**
   * Disallow duplicate `eslint-disable` comments.
   *
   * @see [no-duplicate-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html)
   */
  'eslint-comments/no-duplicate-disable': Rule<[RuleLevel]>;
};
