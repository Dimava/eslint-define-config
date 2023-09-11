import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireAtomicUpdatesRule {
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
   *
   * @see [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)
   */
  'require-atomic-updates': Rule<
    [
      RuleLevel,
      {
        allowProperties?: boolean;
      },
    ]
  >;
}
