import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HtmlButtonHasTypeRule = {
  /**
   * Disallow usage of button without an explicit type attribute.
   *
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  'vue/html-button-has-type': Rule<
    [
      RuleLevel,
      {
        button?: boolean;
        submit?: boolean;
        reset?: boolean;
      },
    ]
  >;
};
