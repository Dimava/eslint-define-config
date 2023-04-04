import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicateAttrInheritanceRule = {
  /**
   * Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`.
   *
   * @see [no-duplicate-attr-inheritance](https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html)
   */
  'vue/no-duplicate-attr-inheritance': Rule<[RuleLevel]>;
};
