import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SemiSpacingRule {
  /**
   * Enforce consistent spacing before and after semicolons.
   *
   * @see [semi-spacing](https://eslint.org/docs/rules/semi-spacing)
   */
  'semi-spacing': Rule<
    [
      RuleLevel,
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
}
