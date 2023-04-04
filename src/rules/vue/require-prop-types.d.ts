import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequirePropTypesRule = {
  /**
   * Require type definitions in props.
   *
   * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
   */
  'vue/require-prop-types': Rule<[RuleLevel]>;
};
