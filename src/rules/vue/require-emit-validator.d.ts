import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireEmitValidatorRule = {
  /**
   * Require type definitions in emits.
   *
   * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
   */
  'vue/require-emit-validator': Rule<[RuleLevel]>;
};
