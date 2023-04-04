import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExtraneousImportRule = {
  /**
   * Disallow `import` declarations which import extraneous modules.
   *
   * @see [no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-import.md)
   */
  'node/no-extraneous-import': Rule<
    [
      RuleLevel,
      {
        allowModules?: string[];
        convertPath?:
          | {
              /**
               * @minItems 2
               * @maxItems 2
               *
               */
              [k: string]: [string, string];
            }
          | [
              {
                /**
                 * @minItems 1
                 */
                include: [string, ...string[]];
                exclude?: string[];
                /**
                 * @minItems 2
                 * @maxItems 2
                 */
                replace: [string, string];
              },
              ...{
                /**
                 * @minItems 1
                 */
                include: [string, ...string[]];
                exclude?: string[];
                /**
                 * @minItems 2
                 * @maxItems 2
                 */
                replace: [string, string];
              }[],
            ];
        resolvePaths?: string[];
        tryExtensions?: string[];
      },
    ]
  >;
};
