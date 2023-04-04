import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireDefaultPropRule = {
  /**
   * Require default value for props.
   *
   * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
   */
  'vue/require-default-prop': Rule<[RuleLevel]>;
};
