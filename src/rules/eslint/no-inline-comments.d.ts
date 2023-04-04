import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoInlineCommentsRule = {
  /**
   * Disallow inline comments after code.
   *
   * @see [no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)
   */
  'no-inline-comments': Rule<
    [
      RuleLevel,
      {
        ignorePattern?: string;
      },
    ]
  >;
};
