import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeRegexRule {
  /**
   * Disallow unsafe regular expressions.
   *
   * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-unsafe-regex.md)
   */
  'unicorn/no-unsafe-regex': Rule<[RuleLevel]>;
}
