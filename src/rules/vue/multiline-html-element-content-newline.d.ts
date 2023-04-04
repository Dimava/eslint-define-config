import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MultilineHtmlElementContentNewlineRule = {
  /**
   * Require a line break before and after the contents of a multiline element.
   *
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  'vue/multiline-html-element-content-newline': Rule<
    [
      RuleLevel,
      {
        ignoreWhenEmpty?: boolean;
        ignores?: string[];
        allowEmptyLines?: boolean;
      },
    ]
  >;
};
