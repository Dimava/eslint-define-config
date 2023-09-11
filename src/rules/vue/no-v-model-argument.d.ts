import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoVModelArgumentRule {
  /**
   * Disallow adding an argument to `v-model` used in custom component.
   *
   * @see [no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html)
   */
  'vue/no-v-model-argument': Rule<[RuleLevel]>;
}
