import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferExponentiationOperatorRule {
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator.
   *
   * @see [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)
   */
  'prefer-exponentiation-operator': Rule<[RuleLevel]>;
}
