import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedDisableRule {
  /**
   * Disallow `eslint-disable` comments about specific rules.
   *
   * @see [no-restricted-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html)
   */
  'eslint-comments/no-restricted-disable': Rule<[RuleLevel, ...string[]]>;
}
