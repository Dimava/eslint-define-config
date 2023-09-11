import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferScreenQueriesRule {
  /**
   * Suggest using `screen` while querying.
   *
   * @see [prefer-screen-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md)
   */
  'testing-library/prefer-screen-queries': Rule<[RuleLevel]>;
}
