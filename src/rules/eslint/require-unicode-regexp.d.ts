import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireUnicodeRegexpRule {
  /**
   * Enforce the use of `u` flag on RegExp.
   *
   * @see [require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)
   */
  'require-unicode-regexp': Rule<[RuleLevel]>;
}
