import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ReturnInEmitsValidatorRule = {
  /**
   * Enforce that a return statement is present in emits validator.
   *
   * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
   */
  'vue/return-in-emits-validator': Rule<[RuleLevel]>;
};
