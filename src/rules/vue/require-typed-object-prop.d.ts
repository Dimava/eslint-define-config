import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireTypedObjectPropRule {
  /**
   * Enforce adding type declarations to object props.
   *
   * @see [require-typed-object-prop](https://eslint.vuejs.org/rules/require-typed-object-prop.html)
   */
  'vue/require-typed-object-prop': Rule<[RuleLevel]>;
}
