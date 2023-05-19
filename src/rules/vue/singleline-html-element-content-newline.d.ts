import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SinglelineHtmlElementContentNewlineRule {
  /**
   * Require a line break before and after the contents of a singleline element.
   *
   * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
   */
  'vue/singleline-html-element-content-newline': Rule<
    [
      RuleLevel,
      {
        ignoreWhenNoAttributes?: boolean;
        ignoreWhenEmpty?: boolean;
        ignores?: string[];
      },
    ]
  >;
}
