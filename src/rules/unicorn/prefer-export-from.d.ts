import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferExportFromRule {
  /**
   * Prefer `export…from` when re-exporting.
   *
   * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-export-from.md)
   */
  'unicorn/prefer-export-from': Rule<
    [
      RuleLevel,
      {
        ignoreUsedVariables?: boolean;
      },
    ]
  >;
}
