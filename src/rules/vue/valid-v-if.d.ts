import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVIfRule = {
  /**
   * Enforce valid `v-if` directives.
   *
   * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
   */
  'vue/valid-v-if': Rule<[RuleLevel]>;
};
