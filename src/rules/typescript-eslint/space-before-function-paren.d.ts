import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpaceBeforeFunctionParenRule {
  /**
   * Enforce consistent spacing before function parenthesis.
   *
   * @see [space-before-function-paren](https://typescript-eslint.io/rules/space-before-function-paren)
   */
  '@typescript-eslint/space-before-function-paren': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            anonymous?: 'always' | 'never' | 'ignore';
            named?: 'always' | 'never' | 'ignore';
            asyncArrow?: 'always' | 'never' | 'ignore';
          }
      ),
    ]
  >;
}
