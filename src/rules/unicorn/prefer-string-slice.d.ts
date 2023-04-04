import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferStringSliceRule = {
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   *
   * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-string-slice.md)
   */
  'unicorn/prefer-string-slice': Rule<[RuleLevel]>;
};
