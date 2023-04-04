import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDivRegexRule = {
  /**
   * Disallow division operators explicitly at the beginning of regular expressions.
   *
   * @see [no-div-regex](https://eslint.org/docs/rules/no-div-regex)
   */
  'no-div-regex': Rule<[RuleLevel]>;
};
