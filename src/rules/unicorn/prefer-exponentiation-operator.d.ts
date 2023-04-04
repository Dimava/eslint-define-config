import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferExponentiationOperatorRule = {
  /**
   *
   * @deprecated
   *
   * @see [prefer-exponentiation-operator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-exponentiation-operator)
   */
  'unicorn/prefer-exponentiation-operator': Rule<[RuleLevel]>;
};
