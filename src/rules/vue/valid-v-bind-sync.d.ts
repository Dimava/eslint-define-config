import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidVBindSyncRule {
  /**
   * Enforce valid `.sync` modifier on `v-bind` directives.
   *
   * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
   */
  'vue/valid-v-bind-sync': Rule<[RuleLevel]>;
}
