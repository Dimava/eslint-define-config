import type { LinesBetweenClassMembersRule as BaseRule } from '../eslint/lines-between-class-members';
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
      Exclude<
        Extract<BaseRule['lines-between-class-members'], any[]>[1],
        undefined
      >,
      Exclude<
        Extract<BaseRule['lines-between-class-members'], any[]>[2],
        undefined
      > & {
        exceptAfterOverload?: boolean;
      },
    ]
  >;
}
