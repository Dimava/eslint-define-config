import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferStringSliceRule {
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   *
   * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-slice.md)
   */
  'unicorn/prefer-string-slice': Rule<[RuleLevel]>;
}
