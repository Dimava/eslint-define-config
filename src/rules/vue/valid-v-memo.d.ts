import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidVMemoRule {
  /**
   * Enforce valid `v-memo` directives.
   *
   * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
   */
  'vue/valid-v-memo': Rule<[RuleLevel]>;
}
