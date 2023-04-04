import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnsafeMemberAccessRule = {
  /**
   * Disallow member access on a value with type `any`.
   *
   * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
   */
  '@typescript-eslint/no-unsafe-member-access': Rule<[RuleLevel]>;
};
