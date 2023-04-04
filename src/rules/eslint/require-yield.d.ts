import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireYieldRule = {
  /**
   * Require generator functions to contain `yield`.
   *
   * @see [require-yield](https://eslint.org/docs/rules/require-yield)
   */
  'require-yield': Rule<[RuleLevel]>;
};
