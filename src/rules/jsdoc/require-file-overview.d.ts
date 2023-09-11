import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireFileOverviewRule {
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   *
   * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header)
   */
  'jsdoc/require-file-overview': Rule<
    [
      RuleLevel,
      {
        tags?: {
          /**
           */
          [k: string]: {
            initialCommentsOnly?: boolean;
            mustExist?: boolean;
            preventDuplicates?: boolean;
          };
        };
      },
    ]
  >;
}
