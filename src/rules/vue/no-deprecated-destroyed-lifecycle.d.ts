import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedDestroyedLifecycleRule {
  /**
   * Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-destroyed-lifecycle](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html)
   */
  'vue/no-deprecated-destroyed-lifecycle': Rule<[RuleLevel]>;
}
