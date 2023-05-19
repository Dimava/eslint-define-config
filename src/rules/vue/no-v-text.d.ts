import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoVTextRule {
  /**
   * Disallow use of v-text.
   *
   * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
   */
  'vue/no-v-text': Rule<[RuleLevel]>;
}
