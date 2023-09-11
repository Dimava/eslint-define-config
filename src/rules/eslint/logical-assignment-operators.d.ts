import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LogicalAssignmentOperatorsRule {
  /**
   * Require or disallow logical assignment operator shorthand.
   *
   * @see [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)
   */
  'logical-assignment-operators': Rule<
    [
      RuleLevel,
      ...((
        | []
        | ['always']
        | [
            'always',
            {
              enforceForIfStatements?: boolean;
            },
          ]
        | ['never']
      ) &
        any[]),
    ]
  >;
}
