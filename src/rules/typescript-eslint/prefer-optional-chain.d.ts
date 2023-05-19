import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferOptionalChainRule {
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
   *
   * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
   */
  '@typescript-eslint/prefer-optional-chain': Rule<[RuleLevel]>;
}
