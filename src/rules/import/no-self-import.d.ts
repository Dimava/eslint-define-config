import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSelfImportRule {
  /**
   * Forbid a module from importing itself.
   *
   * @see [no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-self-import.md)
   */
  'import/no-self-import': Rule<[RuleLevel]>;
}
