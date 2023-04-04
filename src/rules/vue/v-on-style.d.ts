import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type VOnStyleRule = {
  /**
   * Enforce `v-on` directive style.
   *
   * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
   */
  'vue/v-on-style': Rule<[RuleLevel, 'shorthand' | 'longform']>;
};
