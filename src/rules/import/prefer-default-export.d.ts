import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDefaultExportRule {
  /**
   * Prefer a default export if module exports a single name or multiple names.
   *
   * @see [prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/prefer-default-export.md)
   */
  'import/prefer-default-export': Rule<
    [
      RuleLevel,
      {
        target?: 'single' | 'any';
      },
    ]
  >;
}
