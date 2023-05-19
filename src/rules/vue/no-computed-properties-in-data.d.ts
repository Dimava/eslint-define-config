import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoComputedPropertiesInDataRule {
  /**
   * Disallow accessing computed properties in `data`.
   *
   * @see [no-computed-properties-in-data](https://eslint.vuejs.org/rules/no-computed-properties-in-data.html)
   */
  'vue/no-computed-properties-in-data': Rule<[RuleLevel]>;
}
