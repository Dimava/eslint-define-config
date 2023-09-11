import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedImportRule {
  /**
   * Disallow specified modules when loaded by `import` declarations.
   *
   * @see [no-restricted-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-restricted-import.md)
   */
  'n/no-restricted-import': Rule<
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
