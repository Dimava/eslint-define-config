import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface OperatorLinebreakRule {
  /**
   * Enforce consistent linebreak style for operators.
   *
   * @see [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
   */
  'operator-linebreak': Rule<
    [
      RuleLevel,
      'after' | 'before' | 'none' | null,
      {
        overrides?: {
          [k: string]: 'after' | 'before' | 'none' | 'ignore';
        };
      },
    ]
  >;
}
