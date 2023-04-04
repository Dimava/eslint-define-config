import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSyncRule = {
  /**
   * Disallow synchronous methods.
   *
   * @see [no-sync](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-sync.md)
   */
  'n/no-sync': Rule<
    [
      RuleLevel,
      {
        allowAtRootLevel?: boolean;
      },
    ]
  >;
};
