import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireToggleInsideTransitionRule {
  /**
   * Require control the display of the content inside `<transition>`.
   *
   * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
   */
  'vue/require-toggle-inside-transition': Rule<[RuleLevel]>;
}
