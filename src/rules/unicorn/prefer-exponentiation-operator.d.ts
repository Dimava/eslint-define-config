import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferExponentiationOperatorRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-exponentiation-operator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-exponentiation-operator)
   */
  'unicorn/prefer-exponentiation-operator': Rule<[RuleLevel]>;
}
