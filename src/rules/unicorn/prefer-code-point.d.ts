import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferCodePointRule {
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   *
   * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-code-point.md)
   */
  'unicorn/prefer-code-point': Rule<[RuleLevel]>;
}
