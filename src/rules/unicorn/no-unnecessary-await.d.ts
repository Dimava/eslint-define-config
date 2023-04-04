import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnnecessaryAwaitRule = {
  /**
   * Disallow awaiting non-promise values.
   *
   * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-unnecessary-await.md)
   */
  'unicorn/no-unnecessary-await': Rule<[RuleLevel]>;
};
