import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDivRegexRule {
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions.
   *
   * @see [no-div-regex](https://eslint.org/docs/rules/no-div-regex)
   */
  'no-div-regex': Rule<[RuleLevel]>;
}
