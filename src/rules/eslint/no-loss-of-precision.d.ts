import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLossOfPrecisionRule {
  /**
   * Disallow literal numbers that lose precision.
   *
   * @see [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)
   */
  'no-loss-of-precision': Rule<[RuleLevel]>;
}
