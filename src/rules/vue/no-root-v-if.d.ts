import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRootVIfRule {
  /**
   * Disallow `v-if` directives on root element.
   *
   * @see [no-root-v-if](https://eslint.vuejs.org/rules/no-root-v-if.html)
   */
  'vue/no-root-v-if': Rule<[RuleLevel]>;
}
