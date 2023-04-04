import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SwitchColonSpacingRule = {
  /**
   * Enforce spacing around colons of switch statements.
   *
   * @see [switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)
   */
  'switch-colon-spacing': Rule<
    [
      RuleLevel,
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
};
