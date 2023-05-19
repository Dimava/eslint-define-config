import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface HtmlEndTagsRule {
  /**
   * Enforce end tag style.
   *
   * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
   */
  'vue/html-end-tags': Rule<[RuleLevel]>;
}
