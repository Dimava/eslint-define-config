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
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
        ignoreConditionalTests?: boolean;
        ignoreMixedLogicalExpressions?: boolean;
        ignorePrimitives?: {
          bigint?: boolean;
          boolean?: boolean;
          number?: boolean;
          string?: boolean;
          [k: string]: any;
        };
        ignoreTernaryTests?: boolean;
      },
    ]
  >;
}
