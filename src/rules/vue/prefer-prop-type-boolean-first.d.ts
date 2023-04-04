import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferPropTypeBooleanFirstRule = {
  /**
   * Enforce `Boolean` comes first in component prop types.
   *
   * @see [prefer-prop-type-boolean-first](https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html)
   */
  'vue/prefer-prop-type-boolean-first': Rule<[RuleLevel]>;
};
