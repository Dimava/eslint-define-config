import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVShowRule = {
  /**
   * Enforce valid `v-show` directives.
   *
   * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
   */
  'vue/valid-v-show': Rule<[RuleLevel]>;
};
