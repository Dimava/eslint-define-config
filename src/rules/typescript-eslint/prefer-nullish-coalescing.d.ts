import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNullishCoalescingRule {
  /**
   * Enforce using the nullish coalescing operator instead of logical chaining.
   *
   * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
   */
  '@typescript-eslint/prefer-nullish-coalescing': Rule<
    [
      RuleLevel,
      {
        ignoreConditionalTests?: boolean;
        ignoreTernaryTests?: boolean;
        ignoreMixedLogicalExpressions?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      },
    ]
  >;
}
