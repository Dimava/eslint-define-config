import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferRegexpTestRule {
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   *
   * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-regexp-test.md)
   */
  'unicorn/prefer-regexp-test': Rule<[RuleLevel]>;
}
