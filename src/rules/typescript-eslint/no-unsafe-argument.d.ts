import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeArgumentRule {
  /**
   * Disallow calling a function with a value with type `any`.
   *
   * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
   */
  '@typescript-eslint/no-unsafe-argument': Rule<[RuleLevel]>;
}
