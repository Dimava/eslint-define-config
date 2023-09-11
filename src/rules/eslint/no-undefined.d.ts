import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUndefinedRule {
  /**
   * Disallow the use of `undefined` as an identifier.
   *
   * @see [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)
   */
  'no-undefined': Rule<[RuleLevel]>;
}
