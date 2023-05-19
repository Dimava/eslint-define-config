import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedImportRule {
  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @see [no-restricted-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-import.md)
   */
  'node/no-restricted-import': Rule<
    [
      RuleLevel,
      (
        | string
        | {
            name: string | string[];
            message?: string;
          }
      )[],
    ]
  >;
}
