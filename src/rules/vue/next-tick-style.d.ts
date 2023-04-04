import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NextTickStyleRule = {
  /**
   * Enforce Promise or callback style in `nextTick`.
   *
   * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
   */
  'vue/next-tick-style': Rule<[RuleLevel, 'promise' | 'callback']>;
};
