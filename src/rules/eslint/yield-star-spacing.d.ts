import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type YieldStarSpacingRule = {
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions.
   *
   * @see [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)
   */
  'yield-star-spacing': Rule<
    [
      RuleLevel,
      (
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          }
      ),
    ]
  >;
};
