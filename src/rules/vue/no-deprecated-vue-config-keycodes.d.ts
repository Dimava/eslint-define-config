import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedVueConfigKeycodesRule = {
  /**
   * Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
   */
  'vue/no-deprecated-vue-config-keycodes': Rule<[RuleLevel]>;
};
