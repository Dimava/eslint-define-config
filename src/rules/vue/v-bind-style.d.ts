import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type VBindStyleRule = {
  /**
   * Enforce `v-bind` directive style.
   *
   * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
   */
  'vue/v-bind-style': Rule<[RuleLevel, 'shorthand' | 'longform']>;
};
