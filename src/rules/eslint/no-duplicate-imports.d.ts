import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicateImportsRule = {
  /**
   * Disallow duplicate module imports.
   *
   * @see [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)
   */
  'no-duplicate-imports': Rule<
    [
      RuleLevel,
      {
        includeExports?: boolean;
      },
    ]
  >;
};
