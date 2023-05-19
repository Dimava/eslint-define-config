import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireSlotsAsFunctionsRule {
  /**
   * Enforce properties of `$slots` to be used as a function.
   *
   * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
   */
  'vue/require-slots-as-functions': Rule<[RuleLevel]>;
}
