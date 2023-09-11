import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LinesBetweenClassMembersRule {
  /**
   * Require or disallow an empty line between class members.
   *
   * @see [lines-between-class-members](https://typescript-eslint.io/rules/lines-between-class-members)
   */
  '@typescript-eslint/lines-between-class-members': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptAfterSingleLine?: boolean;
        exceptAfterOverload?: boolean;
      },
    ]
  >;
}
