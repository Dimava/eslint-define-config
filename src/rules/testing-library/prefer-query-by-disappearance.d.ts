import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferQueryByDisappearanceRule {
  /**
   * Suggest using `queryBy*` queries when waiting for disappearance.
   *
   * @see [prefer-query-by-disappearance](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-by-disappearance.md)
   */
  'testing-library/prefer-query-by-disappearance': Rule<[RuleLevel]>;
}
