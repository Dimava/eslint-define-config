import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDefaultExportRule {
  /**
   * Forbid default exports.
   *
   * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-default-export.md)
   */
  'import/no-default-export': Rule<[RuleLevel]>;
}
