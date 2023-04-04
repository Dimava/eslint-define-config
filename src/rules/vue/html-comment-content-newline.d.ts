import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HtmlCommentContentNewlineRule = {
  /**
   * Enforce unified line brake in HTML comments.
   *
   * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
   */
  'vue/html-comment-content-newline': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            singleline?: 'always' | 'never' | 'ignore';
            multiline?: 'always' | 'never' | 'ignore';
          }
      ),
      {
        exceptions?: string[];
      },
    ]
  >;
};
