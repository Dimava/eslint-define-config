import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidVElseRule {
  /**
   * Enforce valid `v-else` directives.
   *
   * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
   */
  'vue/valid-v-else': Rule<[RuleLevel]>;
}
