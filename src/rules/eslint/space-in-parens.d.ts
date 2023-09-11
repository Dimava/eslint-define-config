import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpaceInParensRule {
  /**
   * Enforce consistent spacing inside parentheses.
   *
   * @see [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
   */
  'space-in-parens': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptions?: ('{}' | '[]' | '()' | 'empty')[];
      },
    ]
  >;
}
