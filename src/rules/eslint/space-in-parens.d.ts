import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpaceInParensRule = {
  /**
   * Enforce consistent spacing inside parentheses.
   *
   * @see [space-in-parens](https://eslint.org/docs/rules/space-in-parens)
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
};
