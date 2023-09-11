import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAsyncInComputedPropertiesRule {
  /**
   * Disallow asynchronous actions in computed properties.
   *
   * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
   */
  'vue/no-async-in-computed-properties': Rule<[RuleLevel]>;
}
