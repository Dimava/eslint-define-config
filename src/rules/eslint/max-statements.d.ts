import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxStatementsRule {
  /**
   * Enforce a maximum number of statements allowed in function blocks.
   *
   * @see [max-statements](https://eslint.org/docs/rules/max-statements)
   */
  'max-statements': Rule<
    [
      RuleLevel,
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
      {
        ignoreTopLevelFunctions?: boolean;
      },
    ]
  >;
}
