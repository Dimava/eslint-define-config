import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRestrictedImportsRule = {
  /**
   * Disallow specified modules when loaded by `import`.
   *
   * @see [no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)
   */
  'no-restricted-imports': Rule<
    [
      RuleLevel,
      (
        | (
            | string
            | {
                name: string;
                message?: string;
                importNames?: string[];
              }
          )[]
        | []
        | [
            {
              paths?: (
                | string
                | {
                    name: string;
                    message?: string;
                    importNames?: string[];
                  }
              )[];
              patterns?:
                | string[]
                | {
                    /**
                     * @minItems 1
                     */
                    importNames?: [string, ...string[]];
                    /**
                     * @minItems 1
                     */
                    group: [string, ...string[]];
                    message?: string;
                    caseSensitive?: boolean;
                  }[];
            },
          ]
      ),
    ]
  >;
};
