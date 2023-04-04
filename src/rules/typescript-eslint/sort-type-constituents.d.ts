import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SortTypeConstituentsRule = {
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically.
   *
   * @see [sort-type-constituents](https://typescript-eslint.io/rules/sort-type-constituents)
   */
  '@typescript-eslint/sort-type-constituents': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to check intersection types.
         */
        checkIntersections?: boolean;
        /**
         * Whether to check union types.
         */
        checkUnions?: boolean;
        /**
         * Ordering of the groups.
         */
        groupOrder?: (
          | 'conditional'
          | 'function'
          | 'import'
          | 'intersection'
          | 'keyword'
          | 'nullish'
          | 'literal'
          | 'named'
          | 'object'
          | 'operator'
          | 'tuple'
          | 'union'
        )[];
        [k: string]: any;
      },
    ]
  >;
};
