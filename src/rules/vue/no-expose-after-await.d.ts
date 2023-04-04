import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExposeAfterAwaitRule = {
  /**
   * Disallow asynchronously registered `expose`.
   *
   * @see [no-expose-after-await](https://eslint.vuejs.org/rules/no-expose-after-await.html)
   */
  'vue/no-expose-after-await': Rule<[RuleLevel]>;
};
