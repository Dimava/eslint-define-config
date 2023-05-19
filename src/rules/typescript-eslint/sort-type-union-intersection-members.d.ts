import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortTypeUnionIntersectionMembersRule {
  /**
   * Enforce members of a type union/intersection to be sorted alphabetically.
   *
   * @deprecated
   *
   * @see [sort-type-union-intersection-members](https://typescript-eslint.io/rules/sort-type-union-intersection-members)
   */
  '@typescript-eslint/sort-type-union-intersection-members': Rule<
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
}
