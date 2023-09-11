import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireComponentIsRule {
  /**
   * Require `v-bind:is` of `<component>` elements.
   *
   * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
   */
  'vue/require-component-is': Rule<[RuleLevel]>;
}
