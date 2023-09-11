import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRefAsOperandRule {
  /**
   * Disallow use of value wrapped by `ref()` (Composition API) as an operand.
   *
   * @see [no-ref-as-operand](https://eslint.vuejs.org/rules/no-ref-as-operand.html)
   */
  'vue/no-ref-as-operand': Rule<[RuleLevel]>;
}
