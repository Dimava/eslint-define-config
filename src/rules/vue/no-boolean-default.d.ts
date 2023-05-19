import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBooleanDefaultRule {
  /**
   * Disallow boolean defaults.
   *
   * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
   */
  'vue/no-boolean-default': Rule<[RuleLevel, 'default-false' | 'no-default']>;
}
