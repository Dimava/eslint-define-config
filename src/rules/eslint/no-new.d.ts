import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNewRule = {
  /**
   * Disallow `new` operators outside of assignments or comparisons.
   *
   * @see [no-new](https://eslint.org/docs/rules/no-new)
   */
  'no-new': Rule<[RuleLevel]>;
};
