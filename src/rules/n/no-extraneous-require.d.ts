import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraneousRequireRule {
  /**
   * Disallow `require()` expressions which import extraneous modules.
   *
   * @see [no-extraneous-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-require.md)
   */
  'n/no-extraneous-require': Rule<
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
}
