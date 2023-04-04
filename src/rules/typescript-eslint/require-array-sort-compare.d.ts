import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireArraySortCompareRule = {
  /**
   * Require `Array#sort` calls to always provide a `compareFunction`.
   *
   * @see [require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare)
   */
  '@typescript-eslint/require-array-sort-compare': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to ignore arrays in which all elements are strings.
         */
        ignoreStringArrays?: boolean;
        [k: string]: any;
      },
    ]
  >;
};
