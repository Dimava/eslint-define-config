import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ShebangRule = {
  /**
   * Suggest correct usage of shebang.
   *
   * @see [shebang](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/shebang.md)
   */
  'node/shebang': Rule<
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
