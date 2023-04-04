import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CheckSyntaxRule = {
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   *
   * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax)
   */
  'jsdoc/check-syntax': Rule<[RuleLevel]>;
};
