import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DefaultCaseRule {
  /**
   * Require `default` cases in `switch` statements.
   *
   * @see [default-case](https://eslint.org/docs/rules/default-case)
   */
  'default-case': Rule<
    [
      RuleLevel,
      {
        commentPattern?: string;
      },
    ]
  >;
}
