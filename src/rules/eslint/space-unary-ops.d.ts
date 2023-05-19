import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpaceUnaryOpsRule {
  /**
   * Enforce consistent spacing before or after unary operators.
   *
   * @see [space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)
   */
  'space-unary-ops': Rule<
    [
      RuleLevel,
      {
        words?: boolean;
        nonwords?: boolean;
        overrides?: {
          [k: string]: boolean;
        };
      },
    ]
  >;
}
