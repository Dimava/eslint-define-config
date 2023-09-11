import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckSyntaxRule {
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   *
   * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header)
   */
  'jsdoc/check-syntax': Rule<[RuleLevel]>;
}
