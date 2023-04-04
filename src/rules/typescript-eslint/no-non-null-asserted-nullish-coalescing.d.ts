import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNonNullAssertedNullishCoalescingRule = {
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator.
   *
   * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': Rule<
    [RuleLevel]
  >;
};
