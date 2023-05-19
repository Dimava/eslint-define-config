import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AwaitAsyncQueryRule {
  /**
   * Enforce promises from async queries to be handled.
   *
   * @see [await-async-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-query.md)
   */
  'testing-library/await-async-query': Rule<[RuleLevel]>;
}
