import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVIsRule = {
  /**
   * Enforce valid `v-is` directives.
   *
   * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
   */
  'vue/valid-v-is': Rule<[RuleLevel]>;
};
