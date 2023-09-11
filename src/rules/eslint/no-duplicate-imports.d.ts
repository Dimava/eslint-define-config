import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicateImportsRule {
  /**
   * Disallow duplicate module imports.
   *
   * @see [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)
   */
  'no-duplicate-imports': Rule<
    [
      RuleLevel,
      {
        includeExports?: boolean;
      },
    ]
  >;
}
