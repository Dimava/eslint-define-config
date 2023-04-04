import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnsafeCallRule = {
  /**
   * Disallow calling a value with type `any`.
   *
   * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
   */
  '@typescript-eslint/no-unsafe-call': Rule<[RuleLevel]>;
};
