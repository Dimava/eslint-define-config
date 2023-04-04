import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type DefinePropsDeclarationRule = {
  /**
   * Enforce declaration style of `defineProps`.
   *
   * @see [define-props-declaration](https://eslint.vuejs.org/rules/define-props-declaration.html)
   */
  'vue/define-props-declaration': Rule<[RuleLevel, 'type-based' | 'runtime']>;
};
