import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidVPreRule {
  /**
   * Enforce valid `v-pre` directives.
   *
   * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
   */
  'vue/valid-v-pre': Rule<[RuleLevel]>;
}
