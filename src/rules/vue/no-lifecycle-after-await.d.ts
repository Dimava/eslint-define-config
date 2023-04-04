import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoLifecycleAfterAwaitRule = {
  /**
   * Disallow asynchronously registered lifecycle hooks.
   *
   * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
   */
  'vue/no-lifecycle-after-await': Rule<[RuleLevel]>;
};
