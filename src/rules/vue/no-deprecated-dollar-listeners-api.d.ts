import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedDollarListenersApiRule {
  /**
   * Disallow using deprecated `$listeners` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-dollar-listeners-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html)
   */
  'vue/no-deprecated-dollar-listeners-api': Rule<[RuleLevel]>;
}
