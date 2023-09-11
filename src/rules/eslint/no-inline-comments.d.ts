import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInlineCommentsRule {
  /**
   * Disallow inline comments after code.
   *
   * @see [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)
   */
  'no-inline-comments': Rule<
    [
      RuleLevel,
      {
        ignorePattern?: string;
      },
    ]
  >;
}
