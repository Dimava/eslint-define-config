import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ArrowSpacingRule = {
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions.
   *
   * @see [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)
   */
  'arrow-spacing': Rule<
    [
      RuleLevel,
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
};
