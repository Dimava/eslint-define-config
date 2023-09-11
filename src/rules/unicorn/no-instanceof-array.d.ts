import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInstanceofArrayRule {
  /**
   * Require `Array.isArray()` instead of `instanceof Array`.
   *
   * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-instanceof-array.md)
   */
  'unicorn/no-instanceof-array': Rule<[RuleLevel]>;
}
