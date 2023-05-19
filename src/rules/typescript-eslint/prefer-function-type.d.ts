import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferFunctionTypeRule {
  /**
   * Enforce using function types instead of interfaces with call signatures.
   *
   * @see [prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)
   */
  '@typescript-eslint/prefer-function-type': Rule<[RuleLevel]>;
}
