import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTestReturnStatementRule {
  /**
   * Disallow return statements in tests.
   *
   * @see [no-test-return-statement](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md)
   */
  'vitest/no-test-return-statement': Rule<[RuleLevel]>;
}
