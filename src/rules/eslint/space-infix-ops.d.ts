import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpaceInfixOpsRule {
  /**
   * Require spacing around infix operators.
   *
   * @see [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
   */
  'space-infix-ops': Rule<
    [
      RuleLevel,
      {
        int32Hint?: boolean;
      },
    ]
  >;
}
