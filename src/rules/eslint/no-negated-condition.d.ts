import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNegatedConditionRule {
  /**
   * Disallow negated conditions.
   *
   * @see [no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)
   */
  'no-negated-condition': Rule<[RuleLevel]>;
}
