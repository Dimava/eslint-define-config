import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNamedExportRule {
  /**
   * Forbid named exports.
   *
   * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-named-export.md)
   */
  'import/no-named-export': Rule<[RuleLevel]>;
}
