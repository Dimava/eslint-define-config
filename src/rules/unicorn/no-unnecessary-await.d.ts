import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnnecessaryAwaitRule {
  /**
   * Disallow awaiting non-promise values.
   *
   * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-unnecessary-await.md)
   */
  'unicorn/no-unnecessary-await': Rule<[RuleLevel]>;
}
