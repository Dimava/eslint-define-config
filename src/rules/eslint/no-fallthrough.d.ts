import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoFallthroughRule {
  /**
   * Disallow fallthrough of `case` statements.
   *
   * @see [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)
   */
  'no-fallthrough': Rule<
    [
      RuleLevel,
      {
        commentPattern?: string;
        allowEmptyCase?: boolean;
      },
    ]
  >;
}
