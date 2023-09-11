import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferArraySomeRule {
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.
   *
   * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-some.md)
   */
  'unicorn/prefer-array-some': Rule<[RuleLevel]>;
}
