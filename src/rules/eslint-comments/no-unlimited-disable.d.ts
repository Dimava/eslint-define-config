import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnlimitedDisableRule {
  /**
   * Disallow `eslint-disable` comments without rule names.
   *
   * @see [no-unlimited-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html)
   */
  'eslint-comments/no-unlimited-disable': Rule<[RuleLevel]>;
}
