import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSyncRule = {
  /**
   * Disallow synchronous methods.
   *
   * @deprecated
   *
   * @see [no-sync](https://eslint.org/docs/rules/no-sync)
   */
  'no-sync': Rule<
    [
      RuleLevel,
      {
        allowAtRootLevel?: boolean;
      },
    ]
  >;
};
