import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExportRule {
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   *
   * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/export.md)
   */
  'import/export': Rule<[RuleLevel]>;
}
