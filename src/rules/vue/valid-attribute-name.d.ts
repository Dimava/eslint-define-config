import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidAttributeNameRule {
  /**
   * Require valid attribute names.
   *
   * @see [valid-attribute-name](https://eslint.vuejs.org/rules/valid-attribute-name.html)
   */
  'vue/valid-attribute-name': Rule<[RuleLevel]>;
}
