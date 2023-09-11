import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConstantConditionRule {
  /**
   * Disallow constant expressions in conditions.
   *
   * @see [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)
   */
  'no-constant-condition': Rule<
    [
      RuleLevel,
      {
        checkLoops?: boolean;
      },
    ]
  >;
}
