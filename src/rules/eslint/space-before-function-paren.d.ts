import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpaceBeforeFunctionParenRule = {
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis.
   *
   * @see [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)
   */
  'space-before-function-paren': Rule<
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
};
