import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnneededTernaryRule = {
  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * @see [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)
   */
  'no-unneeded-ternary': Rule<
    [
      RuleLevel,
      {
        defaultAssignment?: boolean;
      },
    ]
  >;
};
