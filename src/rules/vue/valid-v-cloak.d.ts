import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVCloakRule = {
  /**
   * Enforce valid `v-cloak` directives.
   *
   * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
   */
  'vue/valid-v-cloak': Rule<[RuleLevel]>;
};
