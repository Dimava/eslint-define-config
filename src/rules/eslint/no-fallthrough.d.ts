import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoFallthroughRule = {
  /**
   * Disallow fallthrough of `case` statements.
   *
   * @see [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)
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
};
