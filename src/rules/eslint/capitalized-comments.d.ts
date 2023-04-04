import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CapitalizedCommentsRule = {
  /**
   * Enforce or disallow capitalization of the first letter of a comment.
   *
   * @see [capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)
   */
  'capitalized-comments': Rule<
    [
      RuleLevel,
      'always' | 'never',
      (
        | {
            ignorePattern?: string;
            ignoreInlineComments?: boolean;
            ignoreConsecutiveComments?: boolean;
          }
        | {
            line?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
            block?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
          }
      ),
    ]
  >;
};
