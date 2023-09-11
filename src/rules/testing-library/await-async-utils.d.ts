import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AwaitAsyncUtilsRule {
  /**
   * Enforce promises from async utils to be awaited properly.
   *
   * @see [await-async-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md)
   */
  'testing-library/await-async-utils': Rule<[RuleLevel]>;
}
