import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface HtmlCommentContentSpacingRule {
  /**
   * Enforce unified spacing in HTML comments.
   *
   * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
   */
  'vue/html-comment-content-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptions?: string[];
      },
    ]
  >;
}
