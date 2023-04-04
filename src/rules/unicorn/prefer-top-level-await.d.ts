import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferTopLevelAwaitRule = {
  /**
   * Prefer top-level await over top-level promises and async function calls.
   *
   * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-top-level-await.md)
   */
  'unicorn/prefer-top-level-await': Rule<[RuleLevel]>;
};
