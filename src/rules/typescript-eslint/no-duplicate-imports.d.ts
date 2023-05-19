import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicateImportsRule {
  /**
   * Disallow duplicate imports.
   *
   * @deprecated
   *
   * @see [no-duplicate-imports](https://typescript-eslint.io/rules/no-duplicate-imports)
   */
  '@typescript-eslint/no-duplicate-imports': Rule<
    [
      RuleLevel,
      {
        includeExports?: boolean;
      },
    ]
  >;
}
