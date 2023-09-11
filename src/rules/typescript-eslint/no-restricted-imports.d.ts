import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedImportsRule {
  /**
   * Disallow specified modules when loaded by `import`.
   *
   * @see [no-restricted-imports](https://typescript-eslint.io/rules/no-restricted-imports)
   */
  '@typescript-eslint/no-restricted-imports': Rule<
    [
      RuleLevel,
      ...(
        | (
            | any
            | {
                allowTypeImports?: boolean;
                [k: string]: any;
              }
          )[]
        | {
            paths?: (
              | any
              | {
                  allowTypeImports?: boolean;
                  [k: string]: any;
                }
            )[];
            patterns?:
              | any
              | {
                  allowTypeImports?: boolean;
                  [k: string]: any;
                }[];
            [k: string]: any;
          }[]
      ),
    ]
  >;
}
