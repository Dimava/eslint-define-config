import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type AdjacentOverloadSignaturesRule = {
  /**
   * Require that function overload signatures be consecutive.
   *
   * @see [adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
   */
  '@typescript-eslint/adjacent-overload-signatures': Rule<[RuleLevel]>;
};
