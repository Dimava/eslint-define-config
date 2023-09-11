import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTernaryRule {
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   *
   * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-ternary.md)
   */
  'unicorn/prefer-ternary': Rule<[RuleLevel, 'always' | 'only-single-line']>;
}
