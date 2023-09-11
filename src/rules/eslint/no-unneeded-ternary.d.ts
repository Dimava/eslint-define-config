import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnneededTernaryRule {
  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
   */
  'no-unneeded-ternary': Rule<
    [
      RuleLevel,
      {
        defaultAssignment?: boolean;
      },
    ]
  >;
}
