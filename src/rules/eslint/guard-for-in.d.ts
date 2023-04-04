import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type GuardForInRule = {
  /**
   * Require `for-in` loops to include an `if` statement.
   *
   * @see [guard-for-in](https://eslint.org/docs/rules/guard-for-in)
   */
  'guard-for-in': Rule<[RuleLevel]>;
};
