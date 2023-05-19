import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConfusingNonNullAssertionRule {
  /**
   * Disallow non-null assertion in locations that may be confusing.
   *
   * @see [no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)
   */
  '@typescript-eslint/no-confusing-non-null-assertion': Rule<[RuleLevel]>;
}
