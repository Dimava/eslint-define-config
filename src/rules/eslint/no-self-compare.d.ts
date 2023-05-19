import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSelfCompareRule {
  /**
   * Disallow comparisons where both sides are exactly the same.
   *
   * @see [no-self-compare](https://eslint.org/docs/rules/no-self-compare)
   */
  'no-self-compare': Rule<[RuleLevel]>;
}
