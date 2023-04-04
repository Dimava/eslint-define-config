import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSyncRule = {
  /**
   * Disallow synchronous methods.
   *
   * @see [no-sync](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-sync.md)
   */
  'node/no-sync': Rule<
    [
      RuleLevel,
      {
        allowAtRootLevel?: boolean;
      },
    ]
  >;
};
