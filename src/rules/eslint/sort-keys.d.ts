import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SortKeysRule = {
  /**
   * Require object keys to be sorted.
   *
   * @see [sort-keys](https://eslint.org/docs/rules/sort-keys)
   */
  'sort-keys': Rule<
    [
      RuleLevel,
      'asc' | 'desc',
      {
        caseSensitive?: boolean;
        natural?: boolean;
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      },
    ]
  >;
};
