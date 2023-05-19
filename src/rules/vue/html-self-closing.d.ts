import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface HtmlSelfClosingRule {
  /**
   * Enforce self-closing style.
   *
   * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
   */
  'vue/html-self-closing': Rule<
    [
      RuleLevel,
      .../**
       * @maxItems 1
       */
      (| []
        | [
            {
              html?: {
                normal?: OptionValue;
                void?: OptionValue;
                component?: OptionValue;
              };
              svg?: OptionValue;
              math?: OptionValue;
            },
          ]
      ),
    ]
  >;
}
type OptionValue = 'always' | 'never' | 'any';
