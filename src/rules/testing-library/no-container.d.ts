import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoContainerRule {
  /**
   * Disallow the use of `container` methods.
   *
   * @see [no-container](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md)
   */
  'testing-library/no-container': Rule<[RuleLevel]>;
}
