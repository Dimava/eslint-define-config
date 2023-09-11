import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWaitForMultipleAssertionsRule {
  /**
   * Disallow the use of multiple `expect` calls inside `waitFor`.
   *
   * @see [no-wait-for-multiple-assertions](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md)
   */
  'testing-library/no-wait-for-multiple-assertions': Rule<[RuleLevel]>;
}
