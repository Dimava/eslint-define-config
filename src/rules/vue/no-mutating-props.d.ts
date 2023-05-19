import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMutatingPropsRule {
  /**
   * Disallow mutation of component props.
   *
   * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
   */
  'vue/no-mutating-props': Rule<[RuleLevel]>;
}
