import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyRule {
  /**
   * Disallow empty block statements.
   *
   * @see [no-empty](https://eslint.org/docs/rules/no-empty)
   */
  'no-empty': Rule<
    [
      RuleLevel,
      {
        allowEmptyCatch?: boolean;
      },
    ]
  >;
}
