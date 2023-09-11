import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoThrowLiteralRule {
  /**
   * Disallow throwing literals as exceptions.
   *
   * @see [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)
   */
  'no-throw-literal': Rule<[RuleLevel]>;
}
