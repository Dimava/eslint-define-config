import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUndefinedRule = {
  /**
   * Disallow the use of `undefined` as an identifier.
   *
   * @see [no-undefined](https://eslint.org/docs/rules/no-undefined)
   */
  'no-undefined': Rule<[RuleLevel]>;
};
