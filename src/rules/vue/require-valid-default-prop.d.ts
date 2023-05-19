import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireValidDefaultPropRule {
  /**
   * Enforce props default values to be valid.
   *
   * @see [require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)
   */
  'vue/require-valid-default-prop': Rule<[RuleLevel]>;
}
