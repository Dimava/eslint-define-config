import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidDefinePropsRule = {
  /**
   * Enforce valid `defineProps` compiler macro.
   *
   * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
   */
  'vue/valid-define-props': Rule<[RuleLevel]>;
};
