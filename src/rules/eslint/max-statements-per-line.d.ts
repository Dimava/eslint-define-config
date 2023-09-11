import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxStatementsPerLineRule {
  /**
   * Enforce a maximum number of statements allowed per line.
   *
   * @see [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
   */
  'max-statements-per-line': Rule<
    [
      RuleLevel,
      {
        max?: number;
      },
    ]
  >;
}
