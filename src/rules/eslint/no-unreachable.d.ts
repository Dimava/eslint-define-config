import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnreachableRule = {
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
   *
   * @see [no-unreachable](https://eslint.org/docs/rules/no-unreachable)
   */
  'no-unreachable': Rule<[RuleLevel]>;
};
