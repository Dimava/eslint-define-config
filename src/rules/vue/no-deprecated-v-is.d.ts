import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedVIsRule = {
  /**
   * Disallow deprecated `v-is` directive (in Vue.js 3.1.0+).
   *
   * @see [no-deprecated-v-is](https://eslint.vuejs.org/rules/no-deprecated-v-is.html)
   */
  'vue/no-deprecated-v-is': Rule<[RuleLevel]>;
};
