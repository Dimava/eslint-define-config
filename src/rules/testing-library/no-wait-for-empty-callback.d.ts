import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWaitForEmptyCallbackRule {
  /**
   * Disallow empty callbacks for `waitFor` and `waitForElementToBeRemoved`.
   *
   * @see [no-wait-for-empty-callback](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-empty-callback.md)
   */
  'testing-library/no-wait-for-empty-callback': Rule<[RuleLevel]>;
}
