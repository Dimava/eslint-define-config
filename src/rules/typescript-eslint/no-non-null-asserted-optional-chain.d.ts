import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNonNullAssertedOptionalChainRule {
  /**
   * Disallow non-null assertions after an optional chain expression.
   *
   * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': Rule<[RuleLevel]>;
}
