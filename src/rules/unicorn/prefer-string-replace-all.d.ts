import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferStringReplaceAllRule {
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   *
   * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-string-replace-all.md)
   */
  'unicorn/prefer-string-replace-all': Rule<[RuleLevel]>;
}
