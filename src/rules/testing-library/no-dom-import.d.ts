import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDomImportRule {
  /**
   * Disallow importing from DOM Testing Library.
   *
   * @see [no-dom-import](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md)
   */
  'testing-library/no-dom-import': Rule<[RuleLevel, string]>;
}
