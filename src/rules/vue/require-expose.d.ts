import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireExposeRule = {
  /**
   * Require declare public properties using `expose`.
   *
   * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
   */
  'vue/require-expose': Rule<[RuleLevel]>;
};
