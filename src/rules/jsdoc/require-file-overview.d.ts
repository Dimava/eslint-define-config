import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireFileOverviewRule = {
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   *
   * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview)
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
};
