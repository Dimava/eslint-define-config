import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireAtomicUpdatesRule = {
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
   *
   * @see [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)
   */
  'require-atomic-updates': Rule<
    [
      RuleLevel,
      {
        allowProperties?: boolean;
      },
    ]
  >;
};
