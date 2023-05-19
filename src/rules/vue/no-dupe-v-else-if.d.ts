import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeVElseIfRule {
  /**
   * Disallow duplicate conditions in `v-if` / `v-else-if` chains.
   *
   * @see [no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html)
   */
  'vue/no-dupe-v-else-if': Rule<[RuleLevel]>;
}
