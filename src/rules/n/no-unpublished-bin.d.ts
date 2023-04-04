import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnpublishedBinRule = {
  /**
   * Disallow `bin` files that npm ignores.
   *
   * @see [no-unpublished-bin](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unpublished-bin.md)
   */
  'n/no-unpublished-bin': Rule<
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
        [k: string]: any;
      },
    ]
  >;
};
