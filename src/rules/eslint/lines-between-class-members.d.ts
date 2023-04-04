import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type LinesBetweenClassMembersRule = {
  /**
   * Require or disallow an empty line between class members.
   *
   * @see [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)
   */
  'lines-between-class-members': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptAfterSingleLine?: boolean;
      },
    ]
  >;
};
