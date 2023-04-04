import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoThrowLiteralRule = {
  /**
   * Disallow throwing literals as exceptions.
   *
   * @see [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)
   */
  'no-throw-literal': Rule<[RuleLevel]>;
};
