import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedVBindSyncRule = {
  /**
   * Disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html)
   */
  'vue/no-deprecated-v-bind-sync': Rule<[RuleLevel]>;
};
