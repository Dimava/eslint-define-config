import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedModulesRule {
  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @deprecated
   *
   * @see [no-restricted-modules](https://eslint.org/docs/latest/rules/no-restricted-modules)
   */
  'no-restricted-modules': Rule<
    [
      RuleLevel,
      ...(
        | (
            | string
            | {
                name: string;
                message?: string;
              }
          )[]
        | {
            paths?: (
              | string
              | {
                  name: string;
                  message?: string;
                }
            )[];
            patterns?: string[];
          }[]
      ),
    ]
  >;
}
