import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferArrayFindRule {
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   *
   * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-array-find.md)
   */
  'unicorn/prefer-array-find': Rule<
    [
      RuleLevel,
      {
        checkFromLast?: boolean;
      },
    ]
  >;
}
