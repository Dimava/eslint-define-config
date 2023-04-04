import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoElseReturnRule = {
  /**
   * Disallow `else` blocks after `return` statements in `if` statements.
   *
   * @see [no-else-return](https://eslint.org/docs/rules/no-else-return)
   */
  'no-else-return': Rule<
    [
      RuleLevel,
      {
        allowElseIf?: boolean;
      },
    ]
  >;
};
