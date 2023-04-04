import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCompareNegZeroRule = {
  /**
   * Disallow comparing against -0.
   *
   * @see [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)
   */
  'no-compare-neg-zero': Rule<[RuleLevel]>;
};
