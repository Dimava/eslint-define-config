import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedDollarScopedslotsApiRule {
  /**
   * Disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html)
   */
  'vue/no-deprecated-dollar-scopedslots-api': Rule<[RuleLevel]>;
}
