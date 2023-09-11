import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAwaitSyncQueryRule {
  /**
   * Disallow unnecessary `await` for sync queries.
   *
   * @see [no-await-sync-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-query.md)
   */
  'testing-library/no-await-sync-query': Rule<[RuleLevel]>;
}
