import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortVarsRule {
  /**
   * Require variables within the same declaration block to be sorted.
   *
   * @see [sort-vars](https://eslint.org/docs/rules/sort-vars)
   */
  'sort-vars': Rule<
    [
      RuleLevel,
      {
        ignoreCase?: boolean;
      },
    ]
  >;
}
