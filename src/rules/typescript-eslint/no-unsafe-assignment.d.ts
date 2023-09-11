import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeAssignmentRule {
  /**
   * Disallow assigning a value with type `any` to variables and properties.
   *
   * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
   */
  '@typescript-eslint/no-unsafe-assignment': Rule<[RuleLevel]>;
}
