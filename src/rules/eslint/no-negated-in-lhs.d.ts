import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNegatedInLhsRule {
  /**
   * Disallow negating the left operand in `in` expressions.
   *
   * @deprecated
   *
   * @see [no-negated-in-lhs](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
   */
  'no-negated-in-lhs': Rule<[RuleLevel]>;
}
