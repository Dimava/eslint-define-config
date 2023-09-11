import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireTypedRefRule {
  /**
   * Require `ref` and `shallowRef` functions to be strongly typed.
   *
   * @see [require-typed-ref](https://eslint.vuejs.org/rules/require-typed-ref.html)
   */
  'vue/require-typed-ref': Rule<[RuleLevel]>;
}
