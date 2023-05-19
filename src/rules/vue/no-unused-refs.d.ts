import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedRefsRule {
  /**
   * Disallow unused refs.
   *
   * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
   */
  'vue/no-unused-refs': Rule<[RuleLevel]>;
}
