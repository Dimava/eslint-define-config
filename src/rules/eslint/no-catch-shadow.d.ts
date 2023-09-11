import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCatchShadowRule {
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope.
   *
   * @deprecated
   *
   * @see [no-catch-shadow](https://eslint.org/docs/latest/rules/no-catch-shadow)
   */
  'no-catch-shadow': Rule<[RuleLevel]>;
}
