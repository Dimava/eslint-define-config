import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxDepthRule {
  /**
   * Enforce a maximum depth that blocks can be nested.
   *
   * @see [max-depth](https://eslint.org/docs/rules/max-depth)
   */
  'max-depth': Rule<
    [
      RuleLevel,
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
    ]
  >;
}
