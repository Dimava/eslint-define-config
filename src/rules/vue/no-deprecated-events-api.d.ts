import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedEventsApiRule {
  /**
   * Disallow using deprecated events api (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
   */
  'vue/no-deprecated-events-api': Rule<[RuleLevel]>;
}
