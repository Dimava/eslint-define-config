import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NewlineAfterImportRule {
  /**
   * Enforce a newline after import statements.
   *
   * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/newline-after-import.md)
   */
  'import/newline-after-import': Rule<
    [
      RuleLevel,
      {
        count?: number;
        considerComments?: boolean;
      },
    ]
  >;
}
