import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSelfImportRule = {
  /**
   * Forbid a module from importing itself.
   *
   * @see [no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-self-import.md)
   */
  'import/no-self-import': Rule<[RuleLevel]>;
};
