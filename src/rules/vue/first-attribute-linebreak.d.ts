import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FirstAttributeLinebreakRule = {
  /**
   * Enforce the location of first attribute.
   *
   * @see [first-attribute-linebreak](https://eslint.vuejs.org/rules/first-attribute-linebreak.html)
   */
  'vue/first-attribute-linebreak': Rule<
    [
      RuleLevel,
      {
        multiline?: 'below' | 'beside' | 'ignore';
        singleline?: 'below' | 'beside' | 'ignore';
      },
    ]
  >;
};
