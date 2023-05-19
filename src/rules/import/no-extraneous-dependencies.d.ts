import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraneousDependenciesRule {
  /**
   * Forbid the use of extraneous packages.
   *
   * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-extraneous-dependencies.md)
   */
  'import/no-extraneous-dependencies': Rule<
    [
      RuleLevel,
      {
        devDependencies?: boolean | any[];
        optionalDependencies?: boolean | any[];
        peerDependencies?: boolean | any[];
        bundledDependencies?: boolean | any[];
        packageDir?: string | any[];
        includeInternal?: boolean;
        includeTypes?: boolean;
      },
    ]
  >;
}
