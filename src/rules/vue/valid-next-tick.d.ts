import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidNextTickRule = {
  /**
   * Enforce valid `nextTick` function calls.
   *
   * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
   */
  'vue/valid-next-tick': Rule<[RuleLevel]>;
};
