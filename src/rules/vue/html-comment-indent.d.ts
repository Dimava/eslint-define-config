import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface HtmlCommentIndentRule {
  /**
   * Enforce consistent indentation in HTML comments.
   *
   * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
   */
  'vue/html-comment-indent': Rule<[RuleLevel, number | 'tab']>;
}
