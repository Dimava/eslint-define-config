import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CommaSpacingRule {
  /**
   * Enforce consistent spacing before and after commas.
   *
   * @see [comma-spacing](https://typescript-eslint.io/rules/comma-spacing)
   */
  '@typescript-eslint/comma-spacing': Rule<
    [
      RuleLevel,
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
}
