import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSequencesRule {
  /**
   * Disallow comma operators.
   *
   * @see [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)
   */
  'no-sequences': Rule<
    [
      RuleLevel,
      {
        allowInParentheses?: boolean;
      },
    ]
  >;
}
