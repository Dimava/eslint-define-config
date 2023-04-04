import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UseVOnExactRule = {
  /**
   * Enforce usage of `exact` modifier on `v-on`.
   *
   * @see [use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html)
   */
  'vue/use-v-on-exact': Rule<[RuleLevel]>;
};
