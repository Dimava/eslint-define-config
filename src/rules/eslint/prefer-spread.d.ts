import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferSpreadRule = {
  /**
   * Require spread operators instead of `.apply()`.
   *
   * @see [prefer-spread](https://eslint.org/docs/rules/prefer-spread)
   */
  'prefer-spread': Rule<[RuleLevel]>;
};
