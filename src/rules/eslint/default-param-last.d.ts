import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DefaultParamLastRule {
  /**
   * Enforce default parameters to be last.
   *
   * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
   */
  'default-param-last': Rule<[RuleLevel]>;
}
