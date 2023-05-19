import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DefineEmitsDeclarationRule {
  /**
   * Enforce declaration style of `defineEmits`.
   *
   * @see [define-emits-declaration](https://eslint.vuejs.org/rules/define-emits-declaration.html)
   */
  'vue/define-emits-declaration': Rule<[RuleLevel, 'type-based' | 'runtime']>;
}
