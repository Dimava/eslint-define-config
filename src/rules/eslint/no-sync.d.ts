import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSyncRule {
  /**
   * Disallow synchronous methods.
   *
   * @deprecated
   *
   * @see [no-sync](https://eslint.org/docs/latest/rules/no-sync)
   */
  'no-sync': Rule<
    [
      RuleLevel,
      {
        allowAtRootLevel?: boolean;
      },
    ]
  >;
}
