import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferWaitForRule {
  /**
   * Use `waitFor` instead of deprecated wait methods.
   *
   * @see [prefer-wait-for](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-wait-for.md)
   */
  'testing-library/prefer-wait-for': Rule<[RuleLevel]>;
}
