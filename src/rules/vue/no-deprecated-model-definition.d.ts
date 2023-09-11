import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedModelDefinitionRule {
  /**
   * Disallow deprecated `model` definition (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-model-definition](https://eslint.vuejs.org/rules/no-deprecated-model-definition.html)
   */
  'vue/no-deprecated-model-definition': Rule<
    [
      RuleLevel,
      {
        allowVue3Compat?: boolean;
      },
    ]
  >;
}
