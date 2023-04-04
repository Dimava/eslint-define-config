import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireExplicitEmitsRule = {
  /**
   * Require `emits` option with name triggered by `$emit()`.
   *
   * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
   */
  'vue/require-explicit-emits': Rule<
    [
      RuleLevel,
      {
        allowProps?: boolean;
      },
    ]
  >;
};
