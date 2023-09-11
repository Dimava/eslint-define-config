import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpaceInfixOpsRule {
  /**
   * Require spacing around infix operators.
   *
   * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
   */
  '@typescript-eslint/space-infix-ops': Rule<
    [
      RuleLevel,
      {
        int32Hint?: boolean;
      },
    ]
  >;
}
