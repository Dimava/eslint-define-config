import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequirePropTypeConstructorRule = {
  /**
   * Require prop type to be a constructor.
   *
   * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
   */
  'vue/require-prop-type-constructor': Rule<[RuleLevel]>;
};
