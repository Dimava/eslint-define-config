import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireRenderReturnRule = {
  /**
   * Enforce render function to always return value.
   *
   * @see [require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)
   */
  'vue/require-render-return': Rule<[RuleLevel]>;
};
