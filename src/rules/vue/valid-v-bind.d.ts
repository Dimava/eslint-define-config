import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidVBindRule {
  /**
   * Enforce valid `v-bind` directives.
   *
   * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
   */
  'vue/valid-v-bind': Rule<[RuleLevel]>;
}
