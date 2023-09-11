import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferStringStartsEndsWithRule {
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   *
   * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-starts-ends-with.md)
   */
  'unicorn/prefer-string-starts-ends-with': Rule<[RuleLevel]>;
}
