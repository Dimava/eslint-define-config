import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidVOnceRule {
  /**
   * Enforce valid `v-once` directives.
   *
   * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
   */
  'vue/valid-v-once': Rule<[RuleLevel]>;
}
