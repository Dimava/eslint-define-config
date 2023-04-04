import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferStringTrimStartEndRule = {
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   *
   * @see [prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-string-trim-start-end.md)
   */
  'unicorn/prefer-string-trim-start-end': Rule<[RuleLevel]>;
};
