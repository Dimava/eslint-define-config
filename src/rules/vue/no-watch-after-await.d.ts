import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWatchAfterAwaitRule {
  /**
   * Disallow asynchronously registered `watch`.
   *
   * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
   */
  'vue/no-watch-after-await': Rule<[RuleLevel]>;
}
