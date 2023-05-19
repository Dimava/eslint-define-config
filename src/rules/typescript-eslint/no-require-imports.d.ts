import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRequireImportsRule {
  /**
   * Disallow invocation of `require()`.
   *
   * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
   */
  '@typescript-eslint/no-require-imports': Rule<[RuleLevel]>;
}
