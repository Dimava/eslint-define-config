import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ComponentApiStyleRule {
  /**
   * Enforce component API style.
   *
   * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
   */
  'vue/component-api-style': Rule<
    [
      RuleLevel,
      /**
       * @minItems 1
       */
      [
        'script-setup' | 'composition' | 'composition-vue2' | 'options',
        ...('script-setup' | 'composition' | 'composition-vue2' | 'options')[],
      ],
    ]
  >;
}
