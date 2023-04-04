import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedFilterRule = {
  /**
   * Disallow using deprecated filters syntax (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-filter](https://eslint.vuejs.org/rules/no-deprecated-filter.html)
   */
  'vue/no-deprecated-filter': Rule<[RuleLevel]>;
};
