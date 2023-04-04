import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type VForDelimiterStyleRule = {
  /**
   * Enforce `v-for` directive's delimiter style.
   *
   * @see [v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html)
   */
  'vue/v-for-delimiter-style': Rule<[RuleLevel, 'in' | 'of']>;
};
