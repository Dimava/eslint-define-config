import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxDependenciesRule {
  /**
   * Enforce the maximum number of dependencies a module can have.
   *
   * @see [max-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/max-dependencies.md)
   */
  'import/max-dependencies': Rule<
    [
      RuleLevel,
      {
        max?: number;
        ignoreTypeImports?: boolean;
      },
    ]
  >;
}
