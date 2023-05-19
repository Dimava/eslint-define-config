import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferOptionalCatchBindingRule {
  /**
   * Prefer omitting the `catch` binding parameter.
   *
   * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-optional-catch-binding.md)
   */
  'unicorn/prefer-optional-catch-binding': Rule<[RuleLevel]>;
}
