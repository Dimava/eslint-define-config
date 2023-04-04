import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SortImportsRule = {
  /**
   * Enforce sorted import declarations within modules.
   *
   * @see [sort-imports](https://eslint.org/docs/rules/sort-imports)
   */
  'sort-imports': Rule<
    [
      RuleLevel,
      {
        ignoreCase?: boolean;
        /**
         * @minItems 4
         * @maxItems 4
         */
        memberSyntaxSortOrder?: [
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
        ];
        ignoreDeclarationSort?: boolean;
        ignoreMemberSort?: boolean;
        allowSeparatedGroups?: boolean;
      },
    ]
  >;
};
