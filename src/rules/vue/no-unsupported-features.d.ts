import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsupportedFeaturesRule {
  /**
   * Disallow unsupported Vue.js syntax on the specified version.
   *
   * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
   */
  'vue/no-unsupported-features': Rule<
    [
      RuleLevel,
      {
        version?: string;
        ignores?: (
          | 'slot-scope-attribute'
          | 'dynamic-directive-arguments'
          | 'v-slot'
          | 'script-setup'
          | 'style-css-vars-injection'
          | 'v-model-argument'
          | 'v-model-custom-modifiers'
          | 'v-is'
          | 'is-attribute-with-vue-prefix'
          | 'v-memo'
          | 'v-bind-prop-modifier-shorthand'
          | 'v-bind-attr-modifier'
        )[];
      },
    ]
  >;
}
