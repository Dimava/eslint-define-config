import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidParamsRule {
  /**
   * Ensures the proper number of arguments are passed to Promise functions.
   *
   * @see [valid-params](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md)
   */
  'promise/valid-params': Rule<[RuleLevel]>;
}
