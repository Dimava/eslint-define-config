import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireNamePropertyRule {
  /**
   * Require a name property in Vue components.
   *
   * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
   */
  'vue/require-name-property': Rule<[RuleLevel]>;
}
