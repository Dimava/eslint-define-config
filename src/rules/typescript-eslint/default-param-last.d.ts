import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DefaultParamLastRule {
  /**
   * Enforce default parameters to be last.
   *
   * @see [default-param-last](https://typescript-eslint.io/rules/default-param-last)
   */
  '@typescript-eslint/default-param-last': Rule<[RuleLevel]>;
}
