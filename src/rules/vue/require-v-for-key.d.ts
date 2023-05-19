import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireVForKeyRule {
  /**
   * Require `v-bind:key` with `v-for` directives.
   *
   * @see [require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html)
   */
  'vue/require-v-for-key': Rule<[RuleLevel]>;
}
