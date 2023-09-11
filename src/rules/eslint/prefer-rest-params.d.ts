import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferRestParamsRule {
  /**
   * Require rest parameters instead of `arguments`.
   *
   * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
   */
  'prefer-rest-params': Rule<[RuleLevel]>;
}
