import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRestrictedPathsRule = {
  /**
   * Enforce which files can be imported in a given folder.
   *
   * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-restricted-paths.md)
   */
  'import/no-restricted-paths': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        zones?: [
          {
            target?: string | string[];
            from?: string | string[];
            except?: string[];
            message?: string;
          },
          ...{
            target?: string | string[];
            from?: string | string[];
            except?: string[];
            message?: string;
          }[],
        ];
        basePath?: string;
      },
    ]
  >;
};
