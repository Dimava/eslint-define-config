import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxParamsRule {
  /**
   * Enforce a maximum number of parameters in function definitions.
   *
   * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
   */
  'max-params': Rule<
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
