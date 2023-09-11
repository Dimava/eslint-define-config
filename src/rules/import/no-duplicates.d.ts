import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicatesRule {
  /**
   * Forbid repeated import of the same module in multiple places.
   *
   * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-duplicates.md)
   */
  'import/no-duplicates': Rule<
    [
      RuleLevel,
      {
        considerQueryString?: boolean;
        'prefer-inline'?: boolean;
      },
    ]
  >;
}
