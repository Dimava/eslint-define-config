import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTopLevelAwaitRule {
  /**
   * Prefer top-level await over top-level promises and async function calls.
   *
   * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-top-level-await.md)
   */
  'unicorn/prefer-top-level-await': Rule<[RuleLevel]>;
}
