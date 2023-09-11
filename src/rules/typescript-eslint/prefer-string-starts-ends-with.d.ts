import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferStringStartsEndsWithRule {
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.
   *
   * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
   */
  '@typescript-eslint/prefer-string-starts-ends-with': Rule<[RuleLevel]>;
}
