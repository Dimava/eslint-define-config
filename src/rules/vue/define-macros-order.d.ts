import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type DefineMacrosOrderRule = {
  /**
   * Enforce order of `defineEmits` and `defineProps` compiler macros.
   *
   * @see [define-macros-order](https://eslint.vuejs.org/rules/define-macros-order.html)
   */
  'vue/define-macros-order': Rule<
    [
      RuleLevel,
      {
        order?: ('defineEmits' | 'defineProps')[];
      },
    ]
  >;
};
