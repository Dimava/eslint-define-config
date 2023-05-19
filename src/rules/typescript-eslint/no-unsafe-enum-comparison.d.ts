import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeEnumComparisonRule {
  /**
   * Disallow comparing an enum value with a non-enum value.
   *
   * @see [no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)
   */
  '@typescript-eslint/no-unsafe-enum-comparison': Rule<[RuleLevel]>;
}
