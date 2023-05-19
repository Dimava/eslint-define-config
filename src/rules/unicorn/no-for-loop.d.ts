import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoForLoopRule {
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   *
   * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-for-loop.md)
   */
  'unicorn/no-for-loop': Rule<[RuleLevel]>;
}
