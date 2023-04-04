import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoLossOfPrecisionRule = {
  /**
   * Disallow literal numbers that lose precision.
   *
   * @see [no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)
   */
  'no-loss-of-precision': Rule<[RuleLevel]>;
};
