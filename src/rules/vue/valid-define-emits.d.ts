import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidDefineEmitsRule = {
  /**
   * Enforce valid `defineEmits` compiler macro.
   *
   * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
   */
  'vue/valid-define-emits': Rule<[RuleLevel]>;
};
