import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidVModelRule {
  /**
   * Enforce valid `v-model` directives.
   *
   * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
   */
  'vue/valid-v-model': Rule<[RuleLevel]>;
}
