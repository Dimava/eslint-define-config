import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTrailingSpacesRule {
  /**
   * Disallow trailing whitespace at the end of lines.
   *
   * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
   */
  'no-trailing-spaces': Rule<
    [
      RuleLevel,
      {
        skipBlankLines?: boolean;
        ignoreComments?: boolean;
      },
    ]
  >;
}
