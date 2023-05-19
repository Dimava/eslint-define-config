import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeReturnRule {
  /**
   * Disallow returning a value with type `any` from a function.
   *
   * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
   */
  '@typescript-eslint/no-unsafe-return': Rule<[RuleLevel]>;
}
