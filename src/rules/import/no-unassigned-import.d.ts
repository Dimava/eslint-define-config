import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnassignedImportRule {
  /**
   * Forbid unassigned imports.
   *
   * @see [no-unassigned-import](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unassigned-import.md)
   */
  'import/no-unassigned-import': Rule<
    [
      RuleLevel,
      {
        devDependencies?: boolean | any[];
        optionalDependencies?: boolean | any[];
        peerDependencies?: boolean | any[];
        allow?: string[];
      },
    ]
  >;
}
