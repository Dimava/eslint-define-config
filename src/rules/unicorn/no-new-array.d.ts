import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNewArrayRule {
  /**
   * Disallow `new Array()`.
   *
   * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-new-array.md)
   */
  'unicorn/no-new-array': Rule<[RuleLevel]>;
}
