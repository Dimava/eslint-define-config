import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUseVElseWithVForRule {
  /**
   * Disallow using `v-else-if`/`v-else` on the same element as `v-for`.
   *
   * @see [no-use-v-else-with-v-for](https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html)
   */
  'vue/no-use-v-else-with-v-for': Rule<[RuleLevel]>;
}
