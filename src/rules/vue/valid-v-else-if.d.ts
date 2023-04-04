import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVElseIfRule = {
  /**
   * Enforce valid `v-else-if` directives.
   *
   * @see [valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)
   */
  'vue/valid-v-else-if': Rule<[RuleLevel]>;
};
