import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ShebangRule = {
  /**
   * Require correct usage of shebang.
   *
   * @see [shebang](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/shebang.md)
   */
  'n/shebang': Rule<
    [
      RuleLevel,
      {
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
      },
    ]
  >;
};
