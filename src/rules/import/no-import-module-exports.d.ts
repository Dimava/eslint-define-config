import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoImportModuleExportsRule {
  /**
   * Forbid import statements with CommonJS module.exports.
   *
   */
  'import/no-import-module-exports': Rule<
    [
      RuleLevel,
      {
        exceptions?: any[];
      },
    ]
  >;
}
