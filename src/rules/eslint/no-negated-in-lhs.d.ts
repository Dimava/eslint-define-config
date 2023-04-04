import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNegatedInLhsRule = {
  /**
   * Disallow negating the left operand in `in` expressions.
   *
   * @deprecated
   *
   * @see [no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)
   */
  'no-negated-in-lhs': Rule<[RuleLevel]>;
};
