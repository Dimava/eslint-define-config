import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMocksImportRule {
  /**
   * Disallow importing from __mocks__ directory.
   *
   * @see [no-mocks-import](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md)
   */
  'vitest/no-mocks-import': Rule<[RuleLevel]>;
}
