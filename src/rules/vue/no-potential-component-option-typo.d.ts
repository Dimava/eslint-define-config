import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoPotentialComponentOptionTypoRule {
  /**
   * Disallow a potential typo in your component property.
   *
   * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
   */
  'vue/no-potential-component-option-typo': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 0
         */
        presets?: ('all' | 'vue' | 'vue-router' | 'nuxt')[];
        /**
         * @minItems 0
         */
        custom?: string[];
        threshold?: number;
      },
    ]
  >;
}
