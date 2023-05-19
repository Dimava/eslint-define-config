import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSelfAssignRule {
  /**
   * Disallow assignments where both sides are exactly the same.
   *
   * @see [no-self-assign](https://eslint.org/docs/rules/no-self-assign)
   */
  'no-self-assign': Rule<
    [
      RuleLevel,
      {
        props?: boolean;
      },
    ]
  >;
}
