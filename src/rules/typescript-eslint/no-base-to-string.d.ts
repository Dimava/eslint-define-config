import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBaseToStringRule {
  /**
   * Require `.toString()` to only be called on objects which provide useful information when stringified.
   *
   * @see [no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)
   */
  '@typescript-eslint/no-base-to-string': Rule<
    [
      RuleLevel,
      {
        ignoredTypeNames?: string[];
      },
    ]
  >;
}
