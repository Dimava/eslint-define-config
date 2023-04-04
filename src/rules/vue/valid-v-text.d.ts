import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVTextRule = {
  /**
   * Enforce valid `v-text` directives.
   *
   * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
   */
  'vue/valid-v-text': Rule<[RuleLevel]>;
};
