import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVForRule = {
  /**
   * Enforce valid `v-for` directives.
   *
   * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
   */
  'vue/valid-v-for': Rule<[RuleLevel]>;
};
