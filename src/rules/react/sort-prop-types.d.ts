import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortPropTypesRule {
  /**
   * Enforce propTypes declarations alphabetical sorting.
   *
   * @see [sort-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)
   */
  'react/sort-prop-types': Rule<
    [
      RuleLevel,
      {
        requiredFirst?: boolean;
        callbacksLast?: boolean;
        ignoreCase?: boolean;
        noSortAlphabetically?: boolean;
        sortShapeProp?: boolean;
      },
    ]
  >;
}
