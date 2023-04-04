import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpaceInfixOpsRule = {
  /**
   * Require spacing around infix operators.
   *
   * @see [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)
   */
  'space-infix-ops': Rule<
    [
      RuleLevel,
      {
        int32Hint?: boolean;
      },
    ]
  >;
};
