import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HtmlQuotesRule = {
  /**
   * Enforce quotes style of HTML attributes.
   *
   * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
   */
  'vue/html-quotes': Rule<
    [
      RuleLevel,
      'double' | 'single',
      {
        avoidEscape?: boolean;
      },
    ]
  >;
};
