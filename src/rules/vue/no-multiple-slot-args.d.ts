import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMultipleSlotArgsRule = {
  /**
   * Disallow to pass multiple arguments to scoped slots.
   *
   * @see [no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html)
   */
  'vue/no-multiple-slot-args': Rule<[RuleLevel]>;
};
